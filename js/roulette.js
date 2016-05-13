var speed = 10;
var divide = 6;
var timeout = 2000;
var stopAngle = Math.round(Math.random() * 360 + 0.5);
var angle = stopAngle;
var section = 360/divide;

for(i=1; i<=divide;i++){
	if(section*(i-1)+1<=stopAngle && stopAngle<=section*i){
	}
};

function roulette(){
	var rand = Math.floor(Math.random()*6)+1;
	advance(rand);

	//回る処理
	var rotation = setInterval(function(){
		$(".roulette").rotate(angle);
		angle += speed;
	},5);


	//止まる処理
	setTimeout(funtction(){
		clearInterval(rotation);
		angle = angle%360-360;
		$(".roulette").ratate({
			angle:angle,
			animateTo:stopAngle,
			callback:result
		});
	},timeout);	
	
}





console.log("shion");