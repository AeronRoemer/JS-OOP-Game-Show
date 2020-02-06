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
    // check for hidden elements, if none remain return true
    checkForWin(){
    if (!document.getElementsByClassName("hide")){
         return true;
      } else {
          return false;
      }
    };

    removeLife(){
    //removes one 'heart' of life per call, changes image source to empty heart
    const life = document.querySelectorAll('.tries');
    life[this.missed].firstChild.src = "images/lostHeart.png";
    this.missed ++;
    };

    gameOver(){
    // changes game screen to reflect win or loss
    const overlay = document.getElementById('overlay');
    const finalMessage = document.getElementById('game-over-message');
    if (this.checkForWin()){
    overlay.style.display = 'flex';
    finalMessage.textContent = 'You Win!';
    overlay.classList.remove('start');
    overlay.classList.add('win');
    } else {
    overlay.style.display = 'flex';
    finalMessage.textContent = 'You Lost! Want to Try Again?';
    overlay.classList.remove('start');
    overlay.classList.add('lose');
    }


    };
    
   }


