$(window).load(function() {
    item = true;
	$(".button").click(function (){
		$("#modal").css("display","block");
		console.log("navi");
	});	
    
    $(window).resize(modalResize());
    

    $(".change").click(function(){
        if(item){
        $("#item").css("display","none");
        $("#collection").css("display","block");
        item = false;
        }else{
             $("#collection").css("display","none");
        $("#item").css("display","block");
        item = true;
        }
      
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
   
