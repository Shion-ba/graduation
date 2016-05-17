var mass = 50;

var update = false;
var ex_update = false;
var g_update = false;

function advance( num ) {
	update = true;

	setTimeout( function() {
		update = false;
		action( mass );
	} , num * 1000 );

	mass = mass - num;
	
	if ( mass < 0 ) {
		mass = 0;
	};

	$( '.mass' ).html( "<p>" + gameCount + "周目 残り" + mass + "マス</p>" );
}

function onWindowResize() {
	windowWidth = $( window ).width();
	windowHeight = $( window ).height();

	camera.aspect = windowWidth / windowHeight;
	camera.updateProjectionMatrix();

	renderer.setSize( windowWidth, windowHeight );
	renderer.render( scene, camera );
}

$( window ).load( function() {
	init();
	render();

	window.addEventListener( 'resize', onWindowResize, false );
});