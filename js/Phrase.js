/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {
  constructor(phrase){
    this.phrase = phrase.toLowerCase()
  }    
  // adds spaces for phrase to game screen
 addPhraseToDisplay(){
     let div = document.querySelector("#phrase")
     let ul = div.firstElementChild
  const phraseArr = this.phrase.split('');
  phraseArr.forEach(element => {
      if (element === " "){
      let liS = document.createElement('li');
      liS.classList.add("space")
      ul.appendChild(liS)
      } else {
      let li = document.createElement('li')
      li.classList.add("hide", "letter", element);
      li.textContent = element;
      ul.appendChild(li)
      }
  });
 }
 }
// .add("letter").add(`${element}`)
