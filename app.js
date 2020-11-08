const game = {
    title: 'Guess the Number!',
    biggestNum: 100,
    smallestNum: 1,
    secretNum: null,
    prevGuesses: [],
    getGuess: function() {
        let guess = NaN;
        while (isNaN(guess) || guess < this.smallestNum || guess > this.biggestNum) {
          guess = parseInt(prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}:`, 10));  // doesn't have a radix, so it is assumed to be 10 (8 if it starts with a 0)
        }
        return guess;    
    },
    play: function() {
      this.secretNum = Math.floor(Math.random() * 
        (this.biggestNum - this.smallestNum + 1)) + this.smallestNum;
    }
  };

//   console.log(game.getGuess())


