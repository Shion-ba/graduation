var windowWidth = $( window ).width();
var windowHeight = $( window ).height();
var scene, camera, renderer, group, earth, exclamation;
var update = false;
var ex_update = false;
var mass = 50;

function init() {
	
	// scene
	scene = new THREE.Scene();
	group = new THREE.Group();
	exclamation = new THREE.Group();

	// camera
	var fov = 75;
	var aspect = windowWidth / windowHeight;
	var near = 1;
	var far = 1000;
	camera = new THREE.PerspectiveCamera( fov, aspect, near, far ); //THREE.OrthographicCamera( windowWidth / -2, windowWidth / 2, windowHeight / 2, windowHeight / -2, 0.1 , 2000);
	camera.position.y = 400;
	camera.position.z = 500; //500

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

	var exB_geometry = new THREE.SphereGeometry( 10 , 8 , 8);
	var exB_material = new THREE.MeshBasicMaterial( { color: 0xff7f7f } );
	var ex_bottom = new THREE.Mesh( exB_geometry, exB_material );
	ex_bottom.position.y = 400;
	ex_bottom.position.z = 350;
	exclamation.add(ex_bottom);

	var exT_geometry = new THREE.CylinderGeometry(15, 10, 50, 32, 32);
	var exT_material = new THREE.MeshBasicMaterial( { color: 0xff7f7f } );
	var ex_top = new THREE.Mesh( exT_geometry, exT_material );
	ex_top.position.y = 440;
	ex_top.position.z = 350;
	exclamation.add(ex_top);

	exclamation.position.y = -200;

	group.add( exclamation );

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

	setTimeout(function() {
		update = false;
	} , num * 1000);

	mass = mass - num;
	
	if (mass < 0) {
		mass = 0;
	};

	action( mass );

	$('.mass').html("<p>" + gameCount + "周目 残り" + mass + "マス</p>");
}

function render() {
	requestAnimationFrame( render );

	if (update) {
		earth.rotation.x += 0.005;
	};

	if (ex_update) {
		exclamation.position.y += 10;
		if (exclamation.position.y === 0) {
			ex_update = false;
			spot(mass);
		};
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
	renderer.render( scene, camera );
}

$( window ).load( function() {
	init();
	render();

	window.addEventListener( 'resize', onWindowResize, false );
});