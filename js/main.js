var cards = [
{rank:"queen",
 suit: "hearts",
 cardImage: "images/queen-of-hearts.png"
},	
{rank:"queen",
 suit:"diamonds",
 cardImage: "images/queen-of-diamonds.png"
},
{rank:"king",
 suit:"hearts",
 cardImage: "images/king-of-hearts.png"
},
{rank: "king",
 suit: "diamonds",
 cardImage:"images/king-of-diamonds.png"
}
]
var cardsInPlay = [];


var checkForMatch = function(){
	if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]) { 
		alert("You found a match!") ? " ":location.reload();
		
	}
	else if (cardsInPlay.length === 2){;
		alert("Sorry, try again.") ? " ": location.reload();
	}
}
var flipCard = function(){
	var cardId = this.getAttribute('data-id')
	console.log("User flipped " + cards[cardId].rank + " of " +cards[cardId].suit + " "+ cards[cardId].cardImage);
	cardsInPlay.push(cards[cardId].rank); 
	this.setAttribute('src',cards[cardId].cardImage);
	checkForMatch ();
}
var createBoard = function () {
	for (var i = 0; i < cards.length; i++){
		var j = Math.floor(Math.random()*(i+1));
		var temp = cards[i];
		cards [i] = cards [j];
		cards [j] = temp;
	var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
};
createBoard();