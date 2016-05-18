items = ["images/items/item-anda.png",
		"images/items/item-awa.png",
		"images/items/item-chin.png",
		"images/items/item-san.png",
		"images/items/item-sanshi.png",
		"images/items/item-sanba.png"
		];

collections = [
		"images/collection/item-yubi.png",
		"images/collection/item-konko.png",
		"images/collection/item-sisa.png",
		"images/collection/item-garasu.png",
		"images/collection/item-ishi.png",
		"images/collection/item-jin.png",
		];

function getItem(num){
	$("#item_"+ num )
	.attr("src",items[num-1]);
	$("#item_"+ num).css("pointer-events","auto");
}

function getCollection(num){
	$("#collection_"+ num )
	.attr("src",collections[num-1]);
	$("#collection_"+ num).css("pointer-events","auto");
}

