/**
 * gadget-helloWorld.js
 * --------------------
 * A minimal demonstration gadget for WikiScriptSync.
 *
 * What it does: adds a small, dismissible greeting banner at the top of
 * every wiki page when the user is logged in.
 *
 * Safe to deploy to: User:Dev_Jadiya/gadget-helloWorld.js
 * (User subpage — affects only your own account, not sitewide)
 *
 * Source: https://github.com/Dev-Jadiya/test-wikiscript
 * Version: 1.0.0
 */

( function () {
    'use strict';

    // Only show the banner to logged-in users
    if ( mw.config.get( 'wgUserId' ) === null ) {
        return;
    }

    // Don't show on special pages or the main page
    var namespace = mw.config.get( 'wgNamespaceNumber' );
    if ( namespace === -1 ) {
        return;
    }

    // Use mw.hook so we wait for the page to be ready
    mw.hook( 'wikipage.content' ).add( function () {
        // Don't add it twice if the hook fires more than once
        if ( document.getElementById( 'wikiscriptsync-hello' ) ) {
            return;
        }

        var banner = document.createElement( 'div' );
        banner.id = 'wikiscriptsync-hello';
        banner.innerHTML =
            '<strong>WikiScriptSync demo</strong> — ' +
            'This banner is injected by <a href="https://script-publisher.toolforge.org/" ' +
            'target="_blank" rel="noopener">WikiScriptSync</a> gadget-helloWorld.js. ' +
            '<button id="wikiscriptsync-hello-close" ' +
            'style="margin-left:8px;cursor:pointer;border:none;background:transparent;' +
            'font-size:1rem;line-height:1;" aria-label="Dismiss">✕</button>';

        var content = document.getElementById( 'mw-content-text' ) ||
                      document.getElementById( 'content' ) ||
                      document.body;
        content.insertBefore( banner, content.firstChild );

        document.getElementById( 'wikiscriptsync-hello-close' )
            .addEventListener( 'click', function () {
                banner.remove();
            } );
    } );

}() );
