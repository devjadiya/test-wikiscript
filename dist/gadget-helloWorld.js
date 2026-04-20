/**
 * gadget-helloWorld.js (FIXED)
 * ----------------------------
 * Injects a dismissible banner for logged-in users.
 */

( function () {
    'use strict';

    $( function () {

        // Ensure user is logged in
        if ( !mw.config.get( 'wgUserId' ) ) return;

        // Prevent duplicate injection
        if ( document.getElementById( 'wikiscriptsync-hello' ) ) return;

        // Create banner
        var banner = document.createElement( 'div' );
        banner.id = 'wikiscriptsync-hello';

        banner.innerHTML =
            '<div class="wss-content">' +
                '<strong>WikiScriptSync</strong> — Hello! Your gadget is working fine testing ✔ test' +
                '<button id="wikiscriptsync-hello-close" aria-label="Close">✕</button>' +
            '</div>';

        // Safe insertion point
        var target =
            document.getElementById( 'mw-content-text' ) ||
            document.getElementById( 'content' ) ||
            document.body;

        // IMPORTANT: prepend is safest across skins
        target.prepend( banner );

        // Close button
        document
            .getElementById( 'wikiscriptsync-hello-close' )
            .addEventListener( 'click', function () {
                banner.remove();
            } );

    } );

} )();
