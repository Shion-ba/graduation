$(window).load(function() {
    var item = true;
    var fromlist ;
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




    //詳細
    $(".item").click(function(event){
        target =Number(event.target.id.slice(5));
        $("#item").css("display","none");
        $(".kwsk").css("display","block");
        $("#kwsk_img").attr("src",items[target-1]);
        getIt_tx(target);
        fromlist="item";
    });


    $(".collection").click(function(event){
        target =Number(event.target.id.slice(12));
        $("#collection").css("display","none");
        $(".kwsk").css("display","block");
        $("#kwsk_img").attr("src",collections[target-1]);
        getColle_tx(target);
        fromlist="collection";
    });

    $(".kwsk_menu").click(
        function (){
        $(".kwsk").css("display","none");
        //$("#item").css("display","block");  
        if(fromlist=="item"){
            $("#item").css("display","block");
        } else{
            $("#collection").css("display","block");
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
    $('.modal_kabotya').load("templates/kabotya_map.html", function() {

    var positionT = $('.location_point').position().top;
    var positionL = $('.location_point').position().left;
    });

}

function hideModal() {
    $(".modal_kabotya").css("display", "none");
    exclamation.position.y = -200;
}