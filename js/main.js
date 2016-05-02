var windowWidth = $( window ).width();
var windowHeight = $( window ).height();
var scene, camera, renderer;

function init() {
	
	// scene
	scene = new THREE.Scene();

	// camera
	var fov = 75;
	var aspect = windowWidth / windowHeight;
	var near = 1;
	var far = 1000;
	camera = new THREE.PerspectiveCamera( fov, aspect, near, far );
	camera.position.y = 500;
	camera.position.z = 300;

	var loader = new THREE.TextureLoader();
	var texture = loader.load( "./images/hoge.png" );
	var geometry = new THREE.SphereGeometry( 500, 32, 32 );
	var material;
	loader.load( './images/hoge.png', function( texture ) {
		material = new THREE.MeshLambertMaterial( { map: texture , color: 0xffffff} );
	});
	var sphere = new THREE.Mesh( geometry, material );
	scene.add(sphere);

	var light = new THREE.DirectionalLight(0xffffff,1);
	light.position.set(0,100,30);
	scene.add(light);

	renderer = new THREE.WebGLRenderer();
  renderer.setSize( windowWidth, windowHeight );
  renderer.setClearColor( new THREE.Color(0x3bdae2) );
  $( '#main' ).append( renderer.domElement );

  renderer.render( scene, camera );
}

$( window ).load( function() {
	init();
});