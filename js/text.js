item_text = [
			"「サーターアンダギー」  おばぁにもらったさとうてんぷら。丸いドーナツみたいだ。おなかをすかせた誰かにあげると…？",
			"「泡盛」　酔ったおじぃたちに捕まり、「ぬめぇ〜ぬめぇ〜」と泡盛をつがれる。ほろ酔い気分でいいあんべぇ〜さ〜(いい気持ち〜)」※飲酒運転だめ絶対",
			"「ちんすこう」沖縄といえば、なお菓子。昔は王族しか食べられなかったらしい。おなかをすかせた誰かにあげると…？",
			"「さんぐゎー」沖縄のお守り。トラップを一度だけ回避できるぞ！せーふぁうたきでゲットした。",
			"「三線」三線を弾き鳴らしながら踊っていた愉快なおじぃにもらう。楽しい気持ちになり、３マス進む。",
			"「三板(サンバ)」三枚の板で作られた打楽器。きれいに音を鳴らすにはコツがいる。なんだか踊りだしたい気持ちになった。サンバだけに。３マス進む。サンバだけに。"
			];

collection_text = [
			"「指ハブ」意外とマイナー(?)なお土産、。かまれるとなかなか抜けないぞ",
			"「こんこんべ」沖縄県北部に生息(?)する精霊。手持ちのちんすこうをあげたら友達になった。",
			"「シーサー」言わずと知れた魔除けのお守り。実は福も呼んできてくれるすごいやつ。何でもないマスで手に入れる。特に効果はない。きっと見守ってくれている。",
			"「琉球ガラス」沖縄らしい鮮やかな色！自分で作るとなお良いものに見える。",
			"「石敢當(いしがんとう)」沖縄の道の角という角にある石。人の名前らしい。さすがに持って帰ることはできないので、記念に写真をぱしゃり。",
			"「ジンベエザメのぬいぐるみ」のぺっとした顔が何とも愛らしいぬいぐるみ。"
			];

function getIt_tx(num){	
    $("#text").text(item_text[num-1]);
	}


function getColle_tx(num){	
    $("#text").text(collection_text[num-1]);
	}

