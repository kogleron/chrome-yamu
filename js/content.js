var s = document.createElement( 'script' );
s.src = chrome.extension.getURL( 'js/page.js' );
(document.head || document.documentElement).appendChild( s );
s.parentNode.removeChild( s );

chrome.runtime.onMessage.addListener( function ( req ) {
    switch ( req.type ) {
        case "browserActionPressed":
            let event = new CustomEvent( 'yard-pause.playPause' );
            window.dispatchEvent( event );
            break;
    }
} );

window.addEventListener( 'yard-pause.setIcon', function ( e ) {
    chrome.runtime.sendMessage( {
        type: 'setIcon',
        icon: e.detail
    } );
}, false );



