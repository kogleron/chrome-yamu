window.addEventListener( 'yard-pause.playPause', function () {
    window.externalAPI.togglePause();
}, false );

window.externalAPI.on( window.externalAPI.EVENT_STATE, function () {
    let event = new CustomEvent( 'yard-pause.setIcon', { detail: window.externalAPI.isPlaying() ? "pause" : "play" } );
    window.dispatchEvent( event );
} );
