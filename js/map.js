function spot ( mass ) {
	console.log('spotだお');
}

function action ( mass ) {
	if ( mass % 5 == 0) {
		spot( mass );
	} else if ( mass == 48 ) {
		spot( mass );
	} else {
		console.log('なんでもないお');
	}
}
