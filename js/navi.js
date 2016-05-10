$(window).load(function() {
	$(".button").click(
		function (){
			$("#modal").css("display","block");
			console.log("navi");

		}
	);	
  $(window).resize(modalResize());
     $(".change").click(
            function(){
                $("#modal").html("index.html","collection.html");
                //たぶん違う。どうつりゃいいのか。ググり力が足りないのか。
            });
	$(".close").click(
		function (){
		$("#modal").css("display","none");
		});
});
        function modalResize(){
 
            var w = $(window).width();
            var h = $(window).height();
 
            var cw = $("#modal").outerWidth();
            var ch = $("#modal").outerHeight();
              $("#modal").css({
                "left": ((w - cw)/2) + "px",
                "top": ((h - ch)/2) + "px"
            });
        }
   