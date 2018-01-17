var Word = require('word.js');
var prompt = require('prompt');

console.log("Try to guess the Movie");

prompt.start();



movies = {
  wordBank: ["Jurassic Park", "Star Wars", "Moneyball", "Patton", "Apocalypse Now", "The Departed", "Office Space"],
  wordsWon: 0,
  guessesRemaining: 10,
  currentWord: null,
  
  startGame: function (wrd) {
    this.resetGuesses();
    this.currentWord = new Word(this.wordBank[Math.floor(Math.random()* this.wordBank.length)]);
    this.currentWord.getLet();
    this.promptUser();
  },

  resetGuesses: function(){
    this.guessesRemaining = 10;
  },

  promptUser: function(){
    var self = this;
    prompt.get(['guessLetter'], function(err, result){
      console.log("You guessed: " + result.guessLet);
      var manyGuessed = self.currentWord.checkLetter(result.guessLet);

      if(manyGuessed ==0) {
        console.log("WRONG");
        self.guessesRemaining--;
        
      } else {
        console.log("CORRECT");
          if(self.currentWord.findWord()){
            console.log("You won!");
            return;
          }
      }

      console.log("Guesses remaining: " + self.guessesRemaining);
      if((self.guessesRemaining > 0) && (self.currentWord.found == false)){
        self.promptUser();
      }
      else if(self.guessesRemaining ==0){
        console.log("Game over. Correct Word is", self.currentWord.target);
      } else {
        console.log(self.currentWrd.wordRender());
      }
    });

  }


};

game.startGame();
