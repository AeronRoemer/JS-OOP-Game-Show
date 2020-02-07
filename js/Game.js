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
        phrase = new Phrase(this.getRandomPhrase());
        this.activePhrase = phrase;
        phrase.addPhraseToDisplay();
    }
    //passed to event handler function in app.js
    handleInteraction(){
      let letter = event.target.textContent
      let check = phrase.checkLetter(letter);
      if (check) {
        phrase.showMatchedLetter(letter);
        event.target.disabled = true;
        event.target.classList.add('chosen');
        this.checkForWin();
      } else {
        event.target.disabled = true;
        event.target.classList.add('wrong');
        this.removeLife()
      }
    };
    // check for hidden elements, if none remain return true
    checkForWin(){
    if (document.getElementsByClassName("hide").length === 0){
        setTimeout(this.gameOver, 1000, 'win');
      } 
    };

    removeLife(){
    //removes one 'heart' of life per call, changes image source to empty heart
    const life = document.querySelectorAll('.tries');
    life[this.missed].firstChild.src = "images/lostHeart.png";
    this.missed ++;
      if (this.missed === 5){
          this.gameOver();
      }
    };
    //method to clear phrase
    resetBoard(){
     const div = document.querySelector("#phrase")
     const ul = div.firstElementChild;
     const life = document.querySelectorAll('.tries');
     this.missed = 0;
     // loop to remove 'li' 
        while (ul.firstChild) {
            ul.removeChild(ul.firstChild);
          }
    // forEach to reset keyboard
    keyboard.forEach(element => {
        element.classList.remove('chosen');
        element.classList.remove('wrong');
        element.disabled = false;
       })
     //forEach to reset hearts
     life.forEach(element => element.firstChild.src = "images/liveHeart.png")

     //reset win/lose screen class
     const overlay = document.getElementById('overlay');
     overlay.classList.remove('win');
     overlay.classList.remove('lose');
     overlay.classList.add('start');
     };

    gameOver(win){
    // changes game screen to reflect win or loss
    const overlay = document.getElementById('overlay');
    const finalMessage = document.getElementById('game-over-message');
    if (win === 'win'){
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


