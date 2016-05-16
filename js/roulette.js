function roulette(){
	var rand = Math.floor(Math.random()*6)+1;
	var speed = 10; //ルーレットの回転速度
	var divide = 6; //ルーレットの分割数
	var timeout = 2000; //○秒後に停止
	var stopAngle = -(rand-1)*60;//Math.round(Math.random()*360+0.5);
	//停止位置の設定
	var angle = stopAngle; //ルーレットの角度の変数。停止位置の値を初期値に設定する。
	var section = 360/divide; //ルーレットの分割エリアから1エリア分の角度を求める
console.log(rand , stopAngle);
	for(i=1; i<=divide; i ++){
		if(section * (i-1)+1 <= stopAngle && stopAngle <= section*i){
		stopNumber = i;
	   }
	};
	//停止位置がどのエリアにあるか調べ、該当する番号をNumberに格納

	advance(rand);

	//回る処理
	var rotation = setInterval(function(){
		$("#mato").rotate(angle);
		angle += speed;
	},5);


	//止まる処理
	setTimeout(function(){
		clearInterval(rotation);
		angle = angle%360-360;
		$("#mato").rotate({
			angle:angle,
			animateTo:stopAngle,
		});
	},timeout);	
};

