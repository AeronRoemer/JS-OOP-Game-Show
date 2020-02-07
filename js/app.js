/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
 //declares game so it can be used globally
 //declares DOM element variables for click handlers
 let game;
 const keyButton = document.getElementsByClassName('key');
 const keyboard = [...keyButton];
 const resetButton = document.getElementById('btn__reset');

 //adds event listeners to 'start game' button
 resetButton.addEventListener('click', () => {
    game = new Game();
    game.resetBoard();
    game.startGame();
 });

//adds event listener to all keyboard buttons

keyboard.forEach(element => element.addEventListener('click', event => {
    game.handleInteraction(event.target)
   }
));
