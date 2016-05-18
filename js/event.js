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

var konkonItem = ['', ''];

function displayEventModal() {
	var eventItem;

	if (mass > 40) {
		eventItem = events["あんだぎー"];
		otherEvent( eventItem );
		getItem(1);
		konkonItem[0] = '<button class="mdl-button mdl-js-button mdl-button--raised mdl-button--accent" onclick="kEventA()">あんだぎーをあげる</button>';
	} else if (mass > 30) {
		eventItem = events["あわもり"];
		otherEvent( eventItem );
		getItem(2);
		mass += 6;
		$('.mass').html("<p>" + gameCount + "周目 残り" + mass + "マス</p>");
	} else if (mass > 25) {
		eventItem = events["こんこんべ"];
		konkonbeEvent(eventItem);
		getCollection(2);
	} else if (mass > 15) {
		eventItem = events["さんば"];
		otherEvent( eventItem );
		getItem(6);
		mass -= 3;
		$('.mass').html("<p>" + gameCount + "周目 残り" + mass + "マス</p>");
	} else {
		eventItem = events["さんしん"];
		otherEvent( eventItem );
		getItem(5);
		mass -= 3;
		$('.mass').html("<p>" + gameCount + "周目 残り" + mass + "マス</p>");
	}
}

function eventroulette(num) {
	var rand = Math.floor(Math.random() * 5);
	if (rand < 2) {
		displayEventModal();
	};
}

function massEvent() {
	ex_update = true;
}

function otherEvent( eventItem ) {
	$('.modal_kabotya').css('display', 'block');
	$('.modal_kabotya').load("templates/kabotya_event.html", function() {
		$('.event_contents_img').html('<img src=\"' + eventItem.img + '\" />');
		$('.event_contents_text').text(eventItem.msg);
	});
}

function konkonbeEvent( eventItem ) {
	$('.modal_kabotya').css('display', 'block');
	$('.modal_kabotya').load("templates/kabotya_event.html", function() {
		$('.event_contents_img').html('<img src=\"' + eventItem.img + '\" />');
		$('.event_contents_text').text(eventItem.msg);
		$('.event_menu').html( konkonItem[ 0 ] );
		$('.event_menu').append( konkonItem[ 1 ] );
		$('.event_menu').append('<button class="mdl-button mdl-js-button mdl-button--raised mdl-button--accent" onclick="hideModal()">閉じる</button>');
	});
}