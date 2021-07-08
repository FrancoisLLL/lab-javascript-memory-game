
class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    // add the rest of the class properties here
  }

  shuffleCards() {
    // ... write your code here
    let randomIndex = 0;
    let swap = "";
    for(let i = 0; i<this.cards.length; i++) {
      randomIndex = Math.floor(Math.random() * (this.cards.length - i));
      swap = this.cards[this.cards.length-i-1];
      this.cards[this.cards.length-i-1] = this.cards[randomIndex];
      this.cards[randomIndex] = swap;
    }

  }

  checkIfPair(card1, card2) {
    this.pairsClicked +=1;
    if(card1 === card2) {
      this.pairsGuessed +=1 ;
      return true;
    }
    return false;
  }

  checkIfFinished() {
    // ... write your code here
    return this.pairsGuessed === this.cards.length / 2;
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;

