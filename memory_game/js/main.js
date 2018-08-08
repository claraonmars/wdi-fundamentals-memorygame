console.log("Up and running!");
//
// var cardOne = "queen";
// var cardTwo = "queen";
// var cardThree = "king";
// var cardFour = "king";
//
// console.log("User flipped " + cardOne);
// console.log("User flipped " + cardThree);

var cards = [{
  rank: "queen",
  suit: "hearts",
  cardImage: "images/queen-of-hearts.png"
},
{
  rank: "queen",
  suit: "diamonds",
  cardImage: "images/queen-of-diamonds.png"
},
{
  rank: "king",
  suit: "hearts",
  cardImage: "images/king-of-hearts.png"
},
{
  rank: "king",
  suit: "diamonds",
  cardImage: "images/king-of-diamonds.png"
}
];
var cardsInPlay =[];
var score = 0;

var checkForMatch = function(){
  if (cardsInPlay[0] === cardsInPlay[1]){
    alert("You found a match!");
  }
  else{
    alert("Sorry, try again.");
  }
};

var flipCard = function(){
  var cardId = this.getAttribute('data-id');
  console.log("User flipped " + cards[cardId].rank);
  cardsInPlay.push(cards[cardId].rank);
  console.log(cards[cardId].cardImage);
  console.log(cards[cardId].suit);

  this.setAttribute('src', cards[cardId].cardImage);

  if (cardsInPlay.length === 2){
  checkForMatch();
}
};

// flipCard(0);
// flipCard(2);

var reset = function(){
  for ( var i = 0; i < cards.length; i++){
  var cardElement = document.getElementsByTagName('img')[i];

  cardElement.setAttribute('src','images/back.png');
  cardsInPlay = [];
  }
};

var createBoard = function(){
  for ( var i = 0; i < cards.length; i++){
    var cardElement = document.createElement('img');
    cardElement.setAttribute('src','images/back.png');
    cardElement.setAttribute('data-id',i);

    cardElement.addEventListener('click',flipCard);
    cardElement.addEventListener('click',getScore);

    document.getElementById('game-board').appendChild(cardElement);

  }
};


var getScore = function(){
  if (cardsInPlay[0] === cardsInPlay[1]){
    score += 1;
  }
  else{
  }

  document.getElementById('score').innerHTML = "Your Score: " + score;
};

createBoard();

var button = document.getElementsByTagName('button')[0];
button.addEventListener('click',reset);
