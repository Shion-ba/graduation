spotArray = [ "平和記念公園", "斎場御嶽", "中村家住宅", "勝連城跡", 
	"KING TACOS", "美ら海水族館", "パイナップルパーク", "むら咲むら", "玉陵", "首里城"];

spotContent = {
	"平和記念公園": {
		img: "hoge",
		text: "「戦争の悲惨さ、命の尊さを学べる場所だなぁ。なんだか涙が出てくるよ…。」",
		action: ""
	},
	"斎場御嶽": {
		img: "hoge",
		text: "「昔は、男子禁制の場所で王様さえ女装しないと入れなかったんだって！神聖な場所なんだね〜。」",
		action: 4,
	},
	"中村家住宅": {
		img: "hoge",
		text: "「戦前の沖縄の住居建築の特色を全て備えているんだって！なんだか時間もゆっくり流れている気がする〜」"
	},
	"勝連城跡": {
		img: "hoge",
		text: "「沖縄のお城って首里城だけじゃなくて、実は300以上も[グスク跡]があるといわれているんだって！城＝グスクは、グスク＝城ではないらしい…奥深いなあ！」"
	}
};

function spot ( mass ) {
	console.log('spotだお');

	switch ( mass ) {
		case 45:
			console.log( spotArray[ 0 ] + "だお" );
			break;
		case 40:
			console.log( spotArray[ 1 ] + "だお" );
			break;
		case 35:
			console.log( spotArray[ 2 ] + "だお" );
			break;
		case 30:
			console.log( spotArray[ 3 ] + "だお" );
			break;
		case 25:
			console.log( spotArray[ 4 ] + "だお" );
			break;
		case 20:
			console.log( spotArray[ 5 ] + "だお" );
			break;
		case 15:
			console.log( spotArray[ 6 ] + "だお" );
			break;
		case 10:
			console.log( spotArray[ 7 ] + "だお" );
			break;
		case 5:
			console.log( spotArray[ 8 ] + "だお" );
			break;
		case 2:
			console.log( spotArray[ 9 ] + "だお" );
			break;
	}
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
