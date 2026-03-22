/**
 * gadget-quickLinks.js
 * --------------------
 * Adds quick-access links to the wiki toolbar for common tasks:
 * sandbox, contributions, and the Script Publisher tool.
 *
 * This follows the standard mw.util.addPortletLink pattern used by
 * many real Wikipedia gadgets (e.g. Twinkle, HotCat).
 *
 * Safe to deploy to: User:Dev_Jadiya/gadget-quickLinks.js
 * Source: https://github.com/Dev-Jadiya/test-wikiscript
 * Version: 1.0.0
 */

( function () {
    'use strict';

    // Wait for MediaWiki to be ready
    $( function () {
        var username = mw.config.get( 'wgUserName' );

        // Only add links for logged-in users
        if ( !username ) {
            return;
        }

        // Add a "My sandbox" link to the personal toolbar
        mw.util.addPortletLink(
            'p-personal',
            mw.util.getUrl( 'User:' + username + '/sandbox' ),
            'Sandbox',
            'pt-sandbox',
            'Go to your sandbox',
            null,
            '#pt-userpage'
        );

        // Add a "Script Publisher" link — useful for gadget maintainers
        mw.util.addPortletLink(
            'p-personal',
            'https://script-publisher.toolforge.org/',
            'Script Publisher Tool',
            'pt-script-publisher',
            'Publish gadgets from GitHub/GitLab to this wiki',
            null,
            null
        );

    } );

}() );
