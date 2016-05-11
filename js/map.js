spotArray = [ "平和記念公園", "斎場御嶽", "中村家住宅", "勝連城跡", 
	"KING TACOS", "美ら海水族館", "パイナップルパーク", "むら咲むら", "玉陵", "首里城"];

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
