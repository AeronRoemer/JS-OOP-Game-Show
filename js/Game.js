/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 // creates class Game
class Game{
    constructor(){
      this.missed = 0,
      this.phrases = [
          'eagle eye', 
          'monkeys at midnight', 
          'loose knit socks', 
          'left head of cerberus', 
          'big knife brawl', 
          'One Mean mama'],
      this.activePhrase = null
    }   
// returns one of five predefined phrases
    getRandomPhrase(){
        return this.phrases[Math.floor(Math.random() * 6)];
    }
   
    startGame(){
        // hides 'start game' screen
        const overlay = document.getElementById('overlay');
        overlay.style.display = 'none';
        // retrieves a phrase, displays it, sets active phrase
        const phrase = new Phrase(this.getRandomPhrase());
        this.activePhrase = phrase;
        phrase.addPhraseToDisplay();
    
       
}
    handleInteraction(){

    };

    checkForWin(){

    };
    removeLife(){

    };
    gameOver(){

    };
    
   }


