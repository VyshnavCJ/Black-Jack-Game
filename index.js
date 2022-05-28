let cards = [];
let message = "";
let hasBlackJack = false;
let isAlive = false;
let sum = 0;

let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
let cardEl = document.getElementById("card-el");

let player = {
  name: "CJ",
  coin: 145,
};

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.coin;

function startGame() {
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [];
  cards.push(firstCard);
  cards.push(secondCard);
  sum = firstCard + secondCard;
  isAlive = true;
  renderGame();
}

function renderGame() {
  if (sum < 21) {
    message = "do you want to draw a new card";
  } else if (sum === 21) {
    message = "You got jack port";
    hasBlackJack = true;
  } else {
    message = "Out of the game";
    isAlive = false;
  }
  messageEl.textContent = message;
  sumEl.textContent = "Sum: " + sum;
  cardEl.textContent = "Card: ";
  for (let count = 0; count < cards.length; count++) {
    cardEl.textContent += cards[count] + " ";
  }
}

function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    renderGame();
  }
}

function getRandomCard() {
  let random = Math.floor(Math.random() * 13 + 1);
  if (random > 10) {
    return 10;
  } else if (random === 1) {
    return 11;
  } else {
    return random;
  }
}
