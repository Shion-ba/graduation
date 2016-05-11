items = ["images/items/item-anda.png",
		"images/items/item-awa.png",
		"images/items/item-chin.png",
		"images/items/item-san.png",
		"images/items/item-awa.png",
		"images/items/item-awa.png"
		];


collections = [
		"images/collection/item-garasu.png",
		"images/collection/item-konko.png",
		"images/collection/item-sisa.png",
		"images/collection/item-konko.png",
		"images/collection/item-konko.png",
		"images/collection/item-konko.png",
		];


function getItem(num){
	$(".item_"+ num )
	.attr("src",items[num-1]);
}


function getCollection(num){
	$(".collection_"+ num )
	.attr("src",collections[num-1]);
}
