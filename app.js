const game = {
    //initialize state
    title: 'Guess the Number!',
    biggestNum: 100,
    smallestNum: 1,
    secretNum: null,
    prevGuesses: [],
    play: function() {
        this.secretNum = Math.floor(Math.random() * 
            (this.biggestNum - this.smallestNum + 1)) + this.smallestNum; //random number 1-100
        let guess = NaN; 
        while(guess !== this.secretNum) { //this runs the game
            guess = this.getGuess();
            this.prevGuesses.push(guess);
            this.render(guess); 
            if (guess === this.secretNum) return;
        }
    },
    getGuess: function() { //this class gets the guess from the user
        let guess = NaN;
        while (isNaN(guess) || guess < this.smallestNum || guess > this.biggestNum) {
            guess = parseInt(prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}: `));
          
    // doesn't have a radix, so it is assumed to be 10 (8 if it starts with a 0)

        }
        return guess;    //logs user's guess
    },
    render: function(guess) { //this class shows the message 
       let msg = (guess === this.secretNum) ?
            `Congrats! You guessed the number in ${this.prevGuesses.length} guesses!` : `Your guess is too ${guess > this.secretNum ? 'high' : 'low'}
            Previous guesses: ${this.prevGuesses.join(', ')}`;
        alert(msg);
    }
};

game.play();
