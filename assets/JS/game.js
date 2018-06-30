`use strict`;

//Input the chosen word here.
//****************************/
//need to make this word.to lowercase...
var chosenWord = "welcome";
var chosenWordUnderlines = [];
var chosenWordStars = [];
var wordLength = chosenWord.length;

var LettersInWordOriginal = [];
var LettersInWordDestroyed = [];

//this is taking word length and making string of _,_,_
// do this once up top to start the page without key press
// then need to do it again below to live inside the scope.
for (i = 0; i < chosenWord.length; i++) {
  var currentLetter = chosenWord[i];
  LettersInWordOriginal.push(currentLetter);
  LettersInWordDestroyed.push(currentLetter);
  chosenWordUnderlines.push(" _ ");
  chosenWordStars.push("*");
}

//Create array of underlines
chosenWordUnderlines = chosenWordUnderlines.join();

chosenWordUnderlinesString = chosenWordUnderlines.toString();
console.log(chosenWordUnderlinesString);

console.log(LettersInWordOriginal);
console.log("chosenWordStars: " + chosenWordStars);


//****************************/

//Link to HTML tags

var letterChoiceText = document.getElementById("letterChoice-text");
var guessesRemainingText = document.getElementById("guessesRemaining-text");
var currentWordText = document.getElementById("currentWord-text");

//Send the underlined version of chosen word to the HTML tag.
currentWordText.textContent = chosenWordUnderlinesString;

var guessNumber = 0;
var allowableGuesses = 15;
var guessRemaining = 0;

var matchedLettersArr = [];
var chosenWordUnderlines = [];
for (i = 0; i < chosenWord.length; i++) {
    chosenWordUnderlines.push(" _ ");
}

document.onkeyup = function(event) {
  if (guessNumber < allowableGuesses) {

    letterChoiceText.textContent = event.key;
    var userLetterChoice = event.key;
    guessNumber++;

      //Loop through the letters in chosenWord, if any letters match to the user choice, do somthing.\

      for (i = 0; i < LettersInWordDestroyed.length; i++) {

        if (userLetterChoice === LettersInWordDestroyed[i]) {

          var indexOfMatch = LettersInWordDestroyed.indexOf(userLetterChoice);
          chosenWordUnderlines[indexOfMatch] = " " + userLetterChoice + " ";

          // replace the letter with a * at that index instead of deleting it.
          //then the indexes will match to substitute.
          if (indexOfMatch > -1) {
            LettersInWordDestroyed[indexOfMatch] = "*";
          }

          console.log("LettersInWordDestroyed: " + LettersInWordDestroyed);

          var starExistsInArray = false;
        }
      }

    guessRemaining = allowableGuesses - guessNumber;
    console.log("guessRemaining: " + guessRemaining);

    //if we are at guess 15 and didn't get it tell them they lost.
    if (LettersInWordDestroyed.join() == chosenWordStars.join()) {
      console.log("YOU win!");
      guessRemaining = 0;
      swal({
        title: "YOU WIN!",
        icon: "success",
        button: "Play Again",
      });
    }else if (guessRemaining == 0) {
      console.log("YOU lose!");
      swal({
        title: "YOU LOSE!",
        icon: "error",
        button: "Play Again",
      });
    }

    console.log("Final String Output: " + chosenWordUnderlines.toString());

    var FinalString = chosenWordUnderlines.toString();
    currentWordText.textContent = FinalString;

    

    // tie guesses back to html text.
    guessesRemainingText.textContent = guessRemaining;
  }

};
