/**
 * gadget-editNotice.js
 * --------------------
 * Shows a small reminder notice above the edit box when a user
 * is editing pages in their own User: namespace. Useful for
 * reminding yourself of conventions before saving.
 *
 * This follows the wgAction / wgNamespaceNumber pattern used by
 * many real Wikipedia edit-helper gadgets.
 *
 * Safe to deploy to: User:Dev_Jadiya/gadget-editNotice.js
 * Source: https://github.com/Dev-Jadiya/test-wikiscript
 * Version: 1.0.0
 */

( function () {
    'use strict';

    // Only run when the user is editing
    if ( mw.config.get( 'wgAction' ) !== 'edit' &&
         mw.config.get( 'wgAction' ) !== 'submit' ) {
        return;
    }

    // Only show in User namespace (namespace 2)
    if ( mw.config.get( 'wgNamespaceNumber' ) !== 2 ) {
        return;
    }

    $( function () {
        var username  = mw.config.get( 'wgUserName' );
        var pageOwner = mw.config.get( 'wgTitle' ).split( '/' )[ 0 ];

        // Only show the notice when editing your own user pages
        if ( username !== pageOwner ) {
            return;
        }

        var notice = $( '<div>' )
            .attr( 'id', 'wikiscriptsync-editnotice' )
            .html(
                '<strong>Your user page</strong> — ' +
                'Changes here only affect your own account. ' +
                'If this is a gadget file managed by ' +
                '<a href="https://script-publisher.toolforge.org/" ' +
                'target="_blank" rel="noopener">WikiScriptSync Tool</a>, ' +
                'consider updating the source repository instead.'
            );

        // Insert above the edit summary line
        $( '#wpSummaryLabel' ).before( notice );
    } );

}() );
