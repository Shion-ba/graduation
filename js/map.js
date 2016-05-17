var spotArray = [ "平和記念公園", "斎場御嶽", "中村家住宅", "勝連城跡", 
	"KING TACOS", "美ら海水族館", "パイナップルパーク", "むら咲むら", "玉陵", "首里城"];

var spotContents = {
	"平和記念公園": {
		img: "./images/spot/heiwa.png",
		msg: "「戦争の悲惨さ、命の尊さを学べる場所だなぁ。なんだか涙が出てくるよ…。」",
		visited: false,
	},
	"斎場御嶽": {
		img: "./images/spot/sefa.jpg",
		msg: "「昔は、男子禁制の場所で王様さえ女装しないと入れなかったんだって！神聖な場所なんだね〜。」 item Get!",
		visited: false,
	},
	"中村家住宅": {
		img: "./images/spot/nakamura.png",
		msg: "「戦前の沖縄の住居建築の特色を全て備えているんだって！なんだか時間もゆっくり流れている気がする〜」 collection Get!",
		visited: false,
	},
	"勝連城跡": {
		img: "./images/spot/katsuren.jpg",
		msg: "「沖縄のお城って首里城だけじゃなくて、実は300以上も[グスク跡]があるといわれているんだって！城＝グスクは、グスク＝城ではないらしい…奥深いなあ！」 collection Get!",
		visited: false,
	},
	"KING TACOS": {
		img: "./images/spot/kintako.jpg",
		msg: "「こ、これは…結構ボリューミーなタコライス！定番はチーズ野菜！ほかにもハンバーガーや、[チキンバラバラ]なんてメニューもある。気になるなぁ。』",
		visited: false,
	},
	"美ら海水族館": {
		img: "./images/spot/tyura.jpg",
		msg: "「国内最大級のアクリル水槽！ジンベエザメは圧巻の迫力！ぬいぐるみ、買って帰ろうかなぁ…」 collection Get!",
		visited: false,
	},
	"パイナップルパーク": {
		img: "./images/spot/pai.jpg",
		msg: "「パイナップルって木に実るのかと思っていたけど、下から生えてくるんだね！手でちぎって食べるスナックパインなんてあるんだ！甘酸っぱくておいしい！」",
		visited: false,
	},
	"むら咲むら": {
		img: "./images/spot/mura.jpg",
		msg: "「沖縄の文化や伝統を体験できる場所！世界遺産や、焼物工房まであるんだ〜。全部回ってみようかな！」 collection Get!",
		visited: false,
	},
	"玉陵": {
		img: "./images/spot/tama.jpg",
		msg: "「大きいなぁ…！琉球王国の王様のお墓なのか…和製のピラミッドみたいな感じかな？」 collection Get!",
		visited: false,
	},
	"首里城": {
		img: "./images/spot/shuri.jpg",
		msg: "「立派なお城だなぁ！沖縄らしい真っ赤な外観と中国風な作りが面白い！」 item Get!",
		visited: false,
	}
};

var events = {
	"あんだぎー": {
		img: "./images/items/item-anda.png",
		msg: "おばぁから サーターアンダギー もらった! item Get!"
	},
	"あわもり": {
		img: "./images/items/item-awa.png",
		msg: "おじぃとしまぁ飲んだ! 車運転しちゃダメ"
	},
	"こんこんべ": {
		img: "./images/collection/item-konko.png",
		msg: "こんこんべがいつの間にかついてきてた!"
	},
	"さんば": {
		img: "./images/items/item-sanba.png",
		msg: "三枚の板で作られた打楽器。きれいに音を鳴らすにはコツがいる。 なんだか踊りだしたい気持ちになった。サンバだけに。 ３マス進む。サンバだけに。"
	},
	"さんしん": {
		img: "./images/items/item-sanshi.png",
		msg: "三線を弾き鳴らしながら踊っていた愉快なおじぃにもらう。 楽しい気持ちになり、３マス進む。"
	}
};


var gameCount = 1;
var spotCount = 10;

function spot ( mass ) {

	var spot;

	switch ( mass ) {
		case 45:
			spot = spotArray[ 0 ];
			break;
		case 40:
			spot = spotArray[ 1 ];
			getItem(4);
			break;
		case 35:
			spot = spotArray[ 2 ];
			getCollection(1);
			break;
		case 30:
			spot = spotArray[ 3 ];
			getCollection(5);
			break;
		case 25:
			spot = spotArray[ 4 ];
			break;
		case 20:
			spot = spotArray[ 5 ];
			getCollection(6);
			break;
		case 15:
			spot = spotArray[ 6 ];
			break;
		case 10:
			spot = spotArray[ 7 ];
			getCollection(4);
			break;
		case 5:
			spot = spotArray[ 8 ];
			getCollection(3);
			break;
		case 2:
			spot = spotArray[ 9 ];
			getItem(3);
			break;
		case 0:
			break;
	}

	displaySpotModal(spot);
}

function massEvent() {
	ex_update = true;
}

function goalEvent() {
	g_update = true;
}

function eventroulette(num) {
	var rand = Math.floor(Math.random() * 5);
	if (rand < 3) {
		displayEventModal();
	};
}

function displayEventModal() {
	var eventItem; 
	if (mass > 40) {
		eventItem = events["あんだぎー"];
		getItem(1);
	} else if (mass > 30) {
		eventItem = events["あわもり"];
		getItem(2);
		mass += 6;
		$('.mass').html("<p>" + gameCount + "周目 残り" + mass + "マス</p>");
	} else if (mass > 25) {
		eventItem = events["こんこんべ"];
		getCollection(2);
	} else if (mass > 15) {
		eventItem = events["さんば"];
		getItem(6);
		mass -= 3;
		$('.mass').html("<p>" + gameCount + "周目 残り" + mass + "マス</p>");
	} else {
		eventItem = events["さんしん"];
		getItem(5);
		mass -= 3;
		$('.mass').html("<p>" + gameCount + "周目 残り" + mass + "マス</p>");
	}

	$('.modal_kabotya').css('display', 'block');
	$('.modal_kabotya').load("templates/kabotya_event.html", function() {
		$('.event_contents_img').html('<img src=\"' + eventItem.img + '\" />');
		$('.event_contents_text').text(eventItem.msg);
	});
}

function displaySpotModal(spot) {
	$('.modal_kabotya').css('display','block');
  $('.modal_kabotya').load("templates/kabotya_spot.html", function() {
  	$('.spot_contents_img').html('<img src=\"' + spotContents[spot].img + '\" />');
		$('.spot_contents_text').text(spotContents[spot].msg);
		if (!spotContents[spot].visited) {
			spotContents[spot].visited = true;
		};
  });
}

function drawMap() {
	var scale = 0.5;
	var canvas = $('#pointCanvas');
	var context = canvas[0].getContext('2d');
	var pointImg = new Image();
	pointImg.src = 'images/point.png';
	var positionX, positionY;
	if (mass == 50) {
		positionX = 50;
		positionY = 100;
	} else if (mass > 44) {
		positionX = 45;
		positionY = 120;
	} else if (mass > 39) {
		positionX = 60;
		positionY = 120;
	} else if (mass > 34) {
		positionX = 90;
		positionY = 95;
	} else if (mass > 29) {
		positionX = 120;
		positionY = 95;
	} else if (mass > 24) {
		positionX = 130;
		positionY = 70;
	} else if (mass > 19) {
		positionX = 135;
		positionY = 25;
	} else if (mass > 14) {
		positionX = 150;
		positionY = 40;
	} else if (mass > 9) {
		positionX = 80;
		positionY = 70;
	} else {
		positionX = 65;
		positionY = 100;
	}
	pointImg.onload = function() {
		var dstWidth = this.width * scale;
		var dstHeight = this.height * scale;
		context.drawImage(pointImg, 0, 0, this.width, this.height, positionX, positionY, dstWidth, dstHeight);
	};
}

function displayGoal() {
	$('.modal_kabotya').css('display', 'block');
	$('.modal_kabotya').load("./templates/kabotya_goal.html");
}

function gameContinue() {
	mass = 50;
	gameCount ++;
	$('.modal_kabotya').css('display', 'none');
	$('.mass').html("<p>" + gameCount + "周目 残り" + mass + "マス</p>");
}

function action ( mass ) {

	if ( mass < 1) {
		goalEvent();
	} else	if ( mass % 5 == 0) {
		massEvent();
	} else if ( mass == 2 ) {
		massEvent();
	} else {
		eventroulette(mass);
	}

}
