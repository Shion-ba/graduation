var windowWidth = $( window ).width();
var windowHeight = $( window ).height();
var scene, camera, renderer, group, earth;

function init() {
	
	// scene
	scene = new THREE.Scene();
	group = new THREE.Group();

	// camera
	var fov = 75;
	var aspect = windowWidth / windowHeight;
	var near = 1;
	var far = 1000;
	camera = new THREE.PerspectiveCamera( fov, aspect, near, far );
	camera.position.y = 500;
	camera.position.z = 300;

	var loader = new THREE.TextureLoader();
	var texture = loader.load( "./texture.png" );
	var geometry = new THREE.SphereGeometry( 500 ); //500, 32, 32
	var material = new THREE.MeshLambertMaterial( { map: texture , color: 0xffffff} );
	material.transparent = true;
	earth = new THREE.Mesh( geometry, material );
	group.add(earth);

	var light = new THREE.DirectionalLight(0xffffff,1);
	light.position.set(0,100,30);
	group.add(light);

	renderer = new THREE.WebGLRenderer();
  renderer.setSize( windowWidth, windowHeight );
  renderer.setClearColor( new THREE.Color(0x3bdae2) );
  $( '#main' ).append( renderer.domElement );

  scene.add(group);

  renderer.render( scene, camera );
}

function advance( num ) {
	for ( var i = 0; i < num; i ++ ) {
		
	};
}

// 画面サイズ変わったら動くんやで
function onWindowResize() {
	windowWidth = $( window ).width();
	windowHeight = $( window ).height();

	camera.aspect = windowWidth / windowHeight;
	camera.updateProjectionMatrix();

	renderer.setSize( windowWidth, windowHeight );
}

$( window ).load( function() {
	init();

	window.addEventListener( 'resize', onWindowResize, false );
});