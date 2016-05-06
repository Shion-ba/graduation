$(window).load(function() {
	$(".button").click(
		function (){
			$("#modal").css("display","block");
			console.log("navi");
		}
	);	

	$(".close").click(
		function (){
		$("#modal").css("display","none");
		});
});

