/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

 const keyButton = document.querySelectorAll('.key');
 const resetButton = document.getElementById('btn__reset');

 //adds event listeners to 'start game' button
 resetButton.addEventListener('click', () => {
    const game = new Game();
    game.startGame();
    game.activePhrase.showMatchedLetter('e');
    game.activePhrase.showMatchedLetter('i');
    game.removeLife();
    game.removeLife();
    game.gameOver();
 });
//adds event listener to all keyboard buttons
// keyButton.forEach(element => addEventListener('click', (event) => {
//     console.log(event.target);
//     return event.target;
//  }));
