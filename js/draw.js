var windowWidth = $( window ).width();
var windowHeight = $( window ).height();
var scene, camera, renderer, group, cloud, earth, wood, exclamation, goal;

function init() {
	// scene
	scene = new THREE.Scene();
	group = new THREE.Group();
	exclamation = new THREE.Group();
	goal = new THREE.Group();
	earth = new THREE.Group();
	cloud = new THREE.Group();

	// camera
	var fov = 75;
	var aspect = windowWidth / windowHeight;
	var near = 1;
	var far = 1000;
	camera = new THREE.PerspectiveCamera( fov, aspect, near, far );
	camera.position.y = 400;
	camera.position.z = 500; //500

	// earth
	var raidus = 450;
	var loader = new THREE.TextureLoader();
	var e_texture = loader.load( 'images/texture.png' );
	var e_geometry = new THREE.SphereGeometry( 500, 32, 32 );
	var e_material = new THREE.MeshLambertMaterial( { color: 0x69f0ae , map: e_texture } );
	e_material.transparent = true;
	e_sphere = new THREE.Mesh( e_geometry, e_material );
	e_sphere.rotation.set( Math.PI/2, 0, Math.PI/2 );

	earth.add( e_sphere );

	var degree = 0;
	var w_texture = loader.load( 'images/wood.png' );
	var w_geometry = new THREE.PlaneGeometry( 188, 211, 1, 1); 
	var w_material = new THREE.MeshBasicMaterial( { color: 0x6bc550, map: w_texture } );
	w_material.transparent = true;
	for ( var i = 0; i < 40; i ++ ) {
		//var w_geometry = new THREE.SphereGeometry( Math.random() * 40 + 20, 8, 8 );
		wood = new THREE.Mesh( w_geometry, w_material );
		var rad = degree * Math.PI / 180;
		var y = raidus * Math.sin( rad );
		var z = raidus * Math.cos( rad );
		wood.position.set( 200, y, z);
		earth.add(wood);
		degree += 10;
	}
	for ( var i = 0; i < 40; i ++ ) {
		//var w_geometry = new THREE.SphereGeometry( Math.random() * 40 + 20, 8, 8 );
		wood = new THREE.Mesh( w_geometry, w_material );
		var rad = degree * Math.PI / 180;
		var y = raidus * Math.sin( rad );
		var z = raidus * Math.cos( rad );
		wood.position.set( -200, y, z );
		earth.add( wood );
		degree += 10;
	}
	group.add( earth );

	// car
	var c_texture = loader.load( 'images/car.png' );
	var c_geometry = new THREE.PlaneGeometry( 100, 60, 1, 1 );
	var c_material = new THREE.MeshBasicMaterial( { color: 0xffffff , map: c_texture } );
	c_material.transparent = true; 
	var car = new THREE.Mesh( c_geometry, c_material );
	car.position.y = 350;
	car.position.z = 400;
	group.add( car );

	// cloud
	var cl_texture = loader.load( 'images/cloud.png' );
	var cl_geometry = new THREE.PlaneGeometry( 100, 100, 1, 1 );
	var cl_material = new THREE.MeshBasicMaterial( { color: 0xffffff, map: cl_texture } );
	cl_material.transparent = true;
	for ( var i = 0; i < 8; i ++ ) {
		var cl = new THREE.Mesh( cl_geometry, cl_material );
		cl.position.x = Math.random() * 2000 - 1000;
		cl.position.y = Math.random() * 50 + 600;
		cl.position.z = Math.random() * 800 - 800;
		cloud.add(cl);
	}

	group.add( cloud );

	// exclamation
	var exB_geometry = new THREE.SphereGeometry( 10 , 8 , 8 );
	var exB_material = new THREE.MeshBasicMaterial( { color: 0xff7f7f } );
	var ex_bottom = new THREE.Mesh( exB_geometry, exB_material );
	ex_bottom.position.y = 400;
	ex_bottom.position.z = 350;
	exclamation.add( ex_bottom );

	var exT_geometry = new THREE.CylinderGeometry( 15, 10, 50, 32, 32 );
	var exT_material = new THREE.MeshBasicMaterial( { color: 0xff7f7f } );
	var ex_top = new THREE.Mesh( exT_geometry, exT_material );
	ex_top.position.y = 440;
	ex_top.position.z = 350;
	exclamation.add( ex_top );

	exclamation.position.y = -200;

	group.add( exclamation );

	// goal
	for ( var i = 0; i < 20; i ++) {
		var g_geometry = new THREE.SphereGeometry( Math.random() * 20 + 5 , 8, 8 );
		var g_material = new THREE.MeshLambertMaterial( { color: 0xffc184 } );
		var g_mesh = new THREE.Mesh( g_geometry, g_material );
		g_mesh.position.x = Math.random() * 500 - 250;
		g_mesh.position.y = Math.random() * 100 + 400;
		g_mesh.position.z = Math.random() * 400;
		goal.add( g_mesh );
	}

	group.add( goal );
	goal.position.y = -300;

	var light = new THREE.AmbientLight ( 0xffffff, 1 ); //DirectionalLight
	light.position.set( 0, 100, 30 );
	group.add( light );

	renderer = new THREE.WebGLRenderer();
  	renderer.setSize( windowWidth, windowHeight );
  	renderer.setClearColor( new THREE.Color(0x3bdae2) );
  	$( '#main' ).append( renderer.domElement );

  	scene.add(group);

  	renderer.render( scene, camera );
}

function render() {
	requestAnimationFrame( render );

	if ( update ) {
		earth.rotation.x += 0.005;
		for (var i = 1; i < 81; i ++ ){
			earth.children[i].rotation.x -= 0.005;
		}
	};

	if ( ex_update ) {
		exclamation.position.y += 10;
		if ( exclamation.position.y === 0 ) {
			ex_update = false;
			setTimeout( function() {
				spot( mass ); 
			}, 500 );
		};
	};

	if ( g_update ) {
		goal.position.y += 15;
		if ( goal.position.y > 400 ) {
			g_update = false;
			displayGoal();
			goal.position.y = -300;
		};
	};

	renderer.render( scene, camera );
}