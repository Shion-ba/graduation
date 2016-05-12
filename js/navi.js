$(window).load(function() {
    item = true;
	$(".button").click(function (){
        $("#modal").fadeIn("fast");
        $("#modal").css("display","block");
	});	

    $(".button_map").click(function() {
        displayModal()
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

              $(".modal_kabotya").css({
                "left": ((w - cw)/2) + "px",
                "top": ((h - ch)/2) + "px"
              });
        }
   


//かぼちゃ追記部分です。
function displayModal() {
    $('.modal_kabotya').css('display','block');
    $('.modal_kabotya').load("templates/kabotya_map.html");
}

function hideModal() {
    $(".modal_kabotya").css("display", "none");
}