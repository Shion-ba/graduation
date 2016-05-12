spotArray = [ "平和記念公園", "斎場御嶽", "中村家住宅", "勝連城跡", 
	"KING TACOS", "美ら海水族館", "パイナップルパーク", "むら咲むら", "玉陵", "首里城"];

spotContents = {
	"平和記念公園": {
		img: "./images/spot/heiwa.png",
		msg: "「戦争の悲惨さ、命の尊さを学べる場所だなぁ。なんだか涙が出てくるよ…。」",
		action: ""
	},
	"斎場御嶽": {
		img: "./images/spot/sefa.png",
		msg: "「昔は、男子禁制の場所で王様さえ女装しないと入れなかったんだって！神聖な場所なんだね〜。」",
		action: 4,
	},
	"中村家住宅": {
		img: "./images/spot/nakamura.png",
		msg: "「戦前の沖縄の住居建築の特色を全て備えているんだって！なんだか時間もゆっくり流れている気がする〜」",
		action: ""
	},
	"勝連城跡": {
		img: "../images/spot/katsuren.jpg",
		msg: "「沖縄のお城って首里城だけじゃなくて、実は300以上も[グスク跡]があるといわれているんだって！城＝グスクは、グスク＝城ではないらしい…奥深いなあ！」",
		action: ""
	},
	"KING TACOS": {
		img: "hoge",
		msg: "「こ、これは…結構ボリューミーなタコライス！定番はチーズ野菜！ほかにもハンバーガーや、[チキンバラバラ]なんてメニューもある。気になるなぁ。』",
		action: ""
	},
	"美ら海水族館": {
		img: "hoge",
		msg: "「国内最大級のアクリル水槽！ジンベエザメは圧巻の迫力！ぬいぐるみ、買って帰ろうかなぁ…」",
		action: ""
	},
	"パイナップルパーク": {
		img: "hoge",
		msg: "「パイナップルって木に実るのかと思っていたけど、下から生えてくるんだね！手でちぎって食べるスナックパインなんてあるんだ！甘酸っぱくておいしい！」",
		action: ""
	},
	"むら咲むら": {
		img: "hoge",
		msg: "「沖縄の文化や伝統を体験できる場所！世界遺産や、焼物工房まであるんだ〜。全部回ってみようかな！」",
		action: ""
	},
	"玉陵": {
		img: "hoge",
		msg: "「大きいなぁ…！琉球王国の王様のお墓なのか…和製のピラミッドみたいな感じかな？」",
		action: ""
	},
	"首里城": {
		img: "./images/spot/shuri.jpg",
		msg: "「立派なお城だなぁ！沖縄らしい真っ赤な外観と中国風な作りが面白い！」",
		action: ""
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
			break;
		case 35:
			spot = spotArray[ 2 ];
			break;
		case 30:
			spot = spotArray[ 3 ];
			break;
		case 25:
			spot = spotArray[ 4 ];
			break;
		case 20:
			spot = spotArray[ 5 ];
			break;
		case 15:
			spot = spotArray[ 6 ];
			break;
		case 10:
			spot = spotArray[ 7 ];
			break;
		case 5:
			spot = spotArray[ 8 ];
			break;
		case 2:
			spot = spotArray[ 9 ];
			break;
	}

	displaySpotModal(spot);
}

function displaySpotModal(spot) {
	$('.modal_kabotya').css('display','block');
  $('.modal_kabotya').load("templates/kabotya_spot.html", function() {
  	$('.spot_contents_img').html('<img src=\"' + spotContents[spot].img + '\" />');
		$('.spot_contents_text').text(spotContents[spot].msg);
  });
}

function action ( mass ) {
	if ( mass % 5 == 0) {
		spot( mass );
	} else if ( mass == 2 ) {
		spot( mass );
	} else {
		console.log('なんでもないお');
	}
}
