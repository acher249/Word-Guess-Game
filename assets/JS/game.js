`use strict`;

//Input the chosen word here.
//****************************/

//need to make this word.to lowercase...
var chosenWord = "greetings";
var chosenWordUnderlines = [];
var wordLength = chosenWord.length;

var LettersInWord = [];

//this is taking word length and making string of _,_,_
// do this once up top to start the page without key press
// then need to do it again below to live inside the scope.
for (i = 0; i < chosenWord.length; i++) {
  var currentLetter = chosenWord[i];
  LettersInWord.push(currentLetter);
  chosenWordUnderlines.push("_");
}

//Create array of underlines
chosenWordUnderlines = chosenWordUnderlines.join();

chosenWordUnderlinesString = chosenWordUnderlines.toString();
console.log(chosenWordUnderlinesString);

console.log(LettersInWord);

//****************************/

//Link to HTML tags

var letterChoiceText = document.getElementById("letterChoice-text");
var guessesRemainingText = document.getElementById("guessesRemaining-text");
var currentWordText = document.getElementById("currentWord-text");
var winsText = document.getElementById("wins-text");
var losesText = document.getElementById("loses-text");
var tiesText = document.getElementById("ties-text");

//Send the underlined version of chosen word to the HTML tag.
currentWordText.textContent = chosenWordUnderlinesString;

//use this later after all guesses are finished.
var wins = 0;
var loses = 0;
var ties = 0;

var guessNumber = 0;
var allowableGuesses = 15;
var guessRemaining = 0;

var matchedLettersArr = [];
var chosenWordUnderlines = [];
for (i = 0; i < chosenWord.length; i++) {
    chosenWordUnderlines.push("_");
}

document.onkeyup = function(event) {
    if (guessNumber < allowableGuesses) {

      //create array with underlines.. in order to sub out letters
      //DONT DO THIS ON EVERY BUTTON PRESS
      // can't do this in an if statment. chosenWordUnderlines needs to be in same scope.

      letterChoiceText.textContent = event.key;
      var userLetterChoice = event.key;
      guessNumber++;

      //Loop through the letters in chosenWord, if any letters match to the user choice, do somthing.\

      for (i = 0; i < LettersInWord.length; i++) {

        if (userLetterChoice === LettersInWord[i]) {
          // console.log(LettersInWord[i] + " matches a letter!");
          console.log('our index', LettersInWord.indexOf(userLetterChoice));


          // Here is the bug -> when we use indexOf it goes and retrives the FIRST occurance of that letter in the word and returns THAT index.

          // therefore it will always return the first letter's index
          
          //keep track of what has been filled.then reset 
          //starting point of loop. by making the chosenWord smaller.
          //is one index letter matches you remove the letter from the chosenWord.

          var indexOfChoice = LettersInWord.indexOf(userLetterChoice);
          chosenWordUnderlines[indexOfChoice] = userLetterChoice;

          matchedLettersArr.push(userLetterChoice);
          // this is adding to the end of the array,
          // needs to substitute at the correct index
          // chosenWordUnderlines.push(LettersInWord[i]);
        }
      }

    }

    console.log("Final String Output: " + chosenWordUnderlines.toString());

    var FinalString = chosenWordUnderlines.toString();
    currentWordText.textContent = FinalString;

    guessRemaining = allowableGuesses - guessNumber;

    // tie back to html text.
    guessesRemainingText.textContent = guessRemaining;
    // losesText.textContent = loses;
    // winsText.textContent = wins;

};
