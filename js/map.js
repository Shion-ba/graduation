var gameCount = 1;
var spotCount = 0;

var spotArray = [ "平和記念公園", "斎場御嶽", "中村家住宅", "勝連城跡", 
	"KING TACOS", "美ら海水族館", "パイナップルパーク", "むら咲むら", "玉陵", "首里城"];

var spotContents = {
	"平和記念公園": {
		img: "./images/spot/heiwa.png",
		msg: "「ここが平和記念公園か…。戦争の悲惨さ、命の尊さを学べる場所だなぁ。なんだか涙が出てくるよ…。」",
		visited: false,
	},
	"斎場御嶽": {
		img: "./images/spot/sefa.jpg",
		msg: "「沖縄のパワースポット、斎場御嶽(せーふぁうたき)。昔は、男子禁制の場所で王様さえ女装しないと入れなかったんだって！神聖な場所なんだね〜。」 item Get!",
		visited: false,
	},
	"中村家住宅": {
		img: "./images/spot/nakamura.png",
		msg: "「中村家住宅は、戦前の沖縄の住居建築の特色を全て備えているんだって！なんだか時間もゆっくり流れている気がする〜」 collection Get!",
		visited: false,
	},
	"勝連城跡": {
		img: "./images/spot/katsuren.jpg",
		msg: "「勝連城跡。沖縄のお城って首里城だけじゃなくて、実は300以上も[グスク跡]があるといわれているんだって！城＝グスクは、グスク＝城ではないらしい…奥深いなあ！」 collection Get!",
		visited: false,
	},
	"KING TACOS": {
		img: "./images/spot/kintako.jpg",
		msg: "「元祖タコライスのお店、KING TACOS!!こ、これは…ボリューミーなタコライス！定番はチーズ野菜！ほかにもハンバーガーや、[チキンバラバラ]なんてメニューもある。気になるなぁ。」",
		visited: false,
	},
	"美ら海水族館": {
		img: "./images/spot/tyura.jpg",
		msg: "「美ら海水族館には、国内最大級のアクリル水槽があって、優雅に泳ぐジンベエザメは圧巻の迫力！ぬいぐるみ、買って帰ろうかなぁ…」 collection Get!",
		visited: false,
	},
	"パイナップルパーク": {
		img: "./images/spot/pai.jpg",
		msg: "「名護パイナップルパークに到着！パイナップルって木に実るのかと思っていたけど、下から生えてくるんだね！手でちぎって食べるスナックパインなんてあるんだ！甘酸っぱくておいしい！」",
		visited: false,
	},
	"むら咲むら": {
		img: "./images/spot/mura.jpg",
		msg: "「沖縄の文化や伝統を体験できる、むら咲むら！世界遺産や、焼物工房まであるんだ〜。全部回ってみようかな！」 collection Get!",
		visited: false,
	},
	"玉陵": {
		img: "./images/spot/tama.jpg",
		msg: "「大きいなぁ…！玉陵(たまうどぅん)、琉球王国の王様のお墓なんだ〜。和製のピラミッドみたいな感じなのかな？」 collection Get!",
		visited: false,
	},
	"首里城": {
		img: "./images/spot/shuri.jpg",
		msg: "「立派なお城だなぁ！首里城は、沖縄らしい真っ赤な外観と中国風な作りが面白いよね！」 item Get!",
		visited: false,
	}
};


function spot ( mass ) {
	var spot;

	switch ( mass ) {
		case 45:
			spot = spotArray[ 0 ];
			break;
		case 40:
			spot = spotArray[ 1 ];
			getItem( 4, spotContents[spot]);
			awamoriItem = '<button class="mdl-button mdl-js-button mdl-button--raised mdl-button--accent" onclick="aEventS()">さんぐわぁーで回避</button>'
			break;
		case 35:
			spot = spotArray[ 2 ];
			getCollection( 1, spotContents[spot].visited );
			break;
		case 30:
			spot = spotArray[ 3 ];
			getCollection( 5, spotContents[spot].visited );
			break;
		case 25:
			spot = spotArray[ 4 ];
			break;
		case 20:
			spot = spotArray[ 5 ];
			getCollection( 6, spotContents[spot].visited );
			break;
		case 15:
			spot = spotArray[ 6 ];
			break;
		case 10:
			spot = spotArray[ 7 ];
			getCollection( 4, spotContents[spot].visited );
			break;
		case 5:
			spot = spotArray[ 8 ];
			getCollection( 3, spotContents[spot].visited );
			break;
		case 2:
			spot = spotArray[ 9 ];
			getItem( 3, spotContents[spot]);
			konkonItem[ 1 ] = '<button class="mdl-button mdl-js-button mdl-button--raised mdl-button--accent" onclick="kEventT()">ちんすこうをあげる</button>';
			break;
		case 0:
			break;
	}

	displaySpotModal( spot );
}

function goalEvent() {
	g_update = true;
	
}

function displaySpotModal( spot ) {
	$( '.modal_kabotya' ).css( 'display', 'block' );
  $( '.modal_kabotya' ).load( "templates/kabotya_spot.html", function() {
  	$( '.spot_contents_img' ).html( '<img src=\"' + spotContents[ spot ].img + '\" />' );
		$( '.spot_contents_text' ).text( spotContents[ spot ].msg );
  });

  if ( !spotContents[ spot ].visited ) {
  	spotCount ++;
  	spotContents[ spot ].visited = true;
  };
}

function drawMap() {
	var positionX, positionY;
	var scale = 0.5;
	var canvas = $( '#pointCanvas' );
	var context = canvas[ 0 ].getContext( '2d' );
	var pointImg = new Image();
	pointImg.src = 'images/point.png';

	if ( mass == 50 ) {
		positionX = 50;
		positionY = 100;
	} else if ( mass > 44 ) {
		positionX = 45;
		positionY = 120;
	} else if ( mass > 39 ) {
		positionX = 60;
		positionY = 120;
	} else if ( mass > 34 ) {
		positionX = 90;
		positionY = 95;
	} else if ( mass > 29 ) {
		positionX = 120;
		positionY = 95;
	} else if ( mass > 24 ) {
		positionX = 130;
		positionY = 70;
	} else if ( mass > 19 ) {
		positionX = 135;
		positionY = 25;
	} else if ( mass > 14 ) {
		positionX = 150;
		positionY = 40;
	} else if ( mass > 9 ) {
		positionX = 80;
		positionY = 70;
	} else {
		positionX = 65;
		positionY = 100;
	}

	pointImg.onload = function() {
		var dstWidth = this.width * scale;
		var dstHeight = this.height * scale;

		context.drawImage( pointImg, 0, 0, this.width, this.height, positionX, positionY, dstWidth, dstHeight );
	};
}

function displayGoal() {
  $( ".modal_kabotya" ).fadeIn( "fast" );
	$( '.modal_kabotya' ).css( 'display', 'block' );
	$( '.modal_kabotya' ).load( "./templates/kabotya_goal.html", function(){
		$( ".goal_round" ).text( gameCount +"週目" );
		$( ".spotCount" ).text( "スポット " + spotCount + "/10カ所中" );
		$( ".itemCount" ).text( "アイテム " + itemCount + "/6種中" );
		$( ".collectionCount" ).text( "コレクション " + collectionCount + "/6種中" );
	});
}

function gameContinue() {
	mass = 50;
	gameCount ++;

	$( '.modal_kabotya' ).css( 'display', 'none' );
	$( '.mass' ).html( "<p>" + gameCount + "周目 残り" + mass + "マス</p>" );
}

function action ( mass ) {
	if ( mass < 1 ) {
		goalEvent();
	} else	if ( mass % 5 == 0 ) {
		massEvent();
	} else if ( mass == 2 ) {
		massEvent();
	} else {
		eventroulette( mass );
	}
}