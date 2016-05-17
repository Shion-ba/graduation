var update = false;
var ex_update = false;
var g_update = false;
var mass = 50;

function advance(num) {

	update = true;

	setTimeout(function() {
		update = false;
		action( mass );
	} , num * 1000);

	mass = mass - num;
	
	if (mass < 0) {
		mass = 0;
	};


	$('.mass').html("<p>" + gameCount + "周目 残り" + mass + "マス</p>");
}

// function render() {
// 	requestAnimationFrame( render );

// 	if (update) {
// 		earth.rotation.x += 0.005;
// 	};

// 	if (ex_update) {
// 		exclamation.position.y += 10;
// 		if (exclamation.position.y === 0) {
// 			ex_update = false;
// 			setTimeout(function() {
// 				spot(mass);
// 			}, 500);
// 		};
// 	};

// 	if (g_update) {
// 		goal.position.y += 15;
// 		if (goal.position.y === 400) {
// 			g_update = false;
// 			displayGoal();
// 			goal.position.y = -200;
// 		};
// 	};

// 	renderer.render( scene, camera );
// }

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