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
        return {phrase: this.phrases[Math.floor(Math.random() * 6)]};
    }
   }

