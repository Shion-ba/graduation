var windowWidth = $( window ).width();
var windowHeight = $( window ).height();
var scene, camera, renderer, group, earth;
var update = false;
var car_up = false;
var mass = 50;

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
	camera.position.y = 400;
	camera.position.z = 500;

	var loader = new THREE.TextureLoader();
  var e_texture = loader.load('images/texture.png');
	var e_geometry = new THREE.SphereGeometry( 500, 32, 32 );
	var e_material = new THREE.MeshLambertMaterial( { color: 0x69f0ae , map: e_texture } );
	e_material.transparent = true;
	earth = new THREE.Mesh( e_geometry, e_material );
	earth.rotation.set( Math.PI/2, 0, Math.PI/2 );
	group.add( earth );

	var c_texture = loader.load( 'images/car.png');
	var c_geometry = new THREE.PlaneGeometry( 100, 60, 1, 1 );
	var c_material = new THREE.MeshBasicMaterial( { color: 0xffffff , map: c_texture } );
	c_material.transparent = true; 
	var car = new THREE.Mesh( c_geometry, c_material );
	car.position.y = 350;
	car.position.z = 400;
	group.add( car );

	var light = new THREE.AmbientLight	( 0xffffff, 1 ); //DirectionalLight
	light.position.set( 0, 100, 30 );
	group.add( light );

	renderer = new THREE.WebGLRenderer();
  renderer.setSize( windowWidth, windowHeight );
  renderer.setClearColor( new THREE.Color(0x3bdae2) );
  $( '#main' ).append( renderer.domElement );

  scene.add(group);

  renderer.render( scene, camera );
}


function advance(num) {

	update = true;
	car_up = true;

	setTimeout(function() {
		update = false;
	} , num * 1000);

	mass = mass - num;

	$('.mass').html("<p>残り" + mass + "マス</p>");

}

function render() {
	requestAnimationFrame( render );

	if (update) {
		earth.rotation.x += 0.005;
	};

	renderer.render( scene, camera );
	
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
	render();

	window.addEventListener( 'resize', onWindowResize, false );
});