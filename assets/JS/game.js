`use strict`;

//Input the chosen word here.
//****************************/

var chosenWord = "Architecture";

//****************************/
chosenWord = chosenWord.toLowerCase();
var chosenWordUnderlines = [];
var chosenWordStars = [];
var wordLength = chosenWord.length;
var LettersInWord = [];

var allowableGuesses = chosenWord.length * 2;

//this is taking word length and making string of _,_,_
// do this once up top to start the page without key press
// then need to do it again below to live inside the scope.
for (i = 0; i < chosenWord.length; i++) {
  var currentLetter = chosenWord[i];
  LettersInWord.push(currentLetter);
  chosenWordUnderlines.push(" _ ");
  chosenWordStars.push("*");
}

//Create array of underlines
chosenWordUnderlines = chosenWordUnderlines.join();
chosenWordUnderlinesString = chosenWordUnderlines.toString();

//Link to HTML tags
var letterChoiceText = document.getElementById("letterChoice-text");
var guessesRemainingText = document.getElementById("guessesRemaining-text");
var currentWordText = document.getElementById("currentWord-text");

//Send the underlined version of chosen word to the HTML tag.
currentWordText.textContent = chosenWordUnderlinesString;

var guessNumber = 0;
var guessRemaining = 0;

var matchedLettersArr = [];
var chosenWordUnderlines = [];
for (i = 0; i < chosenWord.length; i++) {
    chosenWordUnderlines.push(" _ ");
}

var gameover = false;

//hide play again button until the game is over
var x = document.getElementById("button");
x.style.display = "none";

document.onkeyup = function(event) {
  if (guessNumber < allowableGuesses && gameover == false) {

    letterChoiceText.textContent = event.key;
    var userLetterChoice = event.key;
    guessNumber++;

      //Loop through the letters in chosenWord, if any letters match to the user choice, do somthing.
      for (i = 0; i < LettersInWord.length; i++) {

        if (userLetterChoice === LettersInWord[i]) {

          var indexOfMatch = LettersInWord.indexOf(userLetterChoice);
          chosenWordUnderlines[indexOfMatch] = " " + userLetterChoice + " ";

          // replace the letter with a * at that index instead of deleting it.
          //then the indexes will match to substitute.
          if (indexOfMatch > -1) {
            LettersInWord[indexOfMatch] = "*";
          }

          //console.log("LettersInWordDestroyed: " + LettersInWordDestroyed);

          var starExistsInArray = false;
        }
      }

    guessRemaining = allowableGuesses - guessNumber;
    
    if (LettersInWord.join() == chosenWordStars.join()) {
      console.log("YOU win!");
      guessRemaining = 0;
      swal({
        title: "YOU WIN!",
        icon: "success",
        button: ":)", 
      });
      x.style.display = "block";
      gameover = true;
        }else if (guessRemaining == 0) {
      console.log("YOU lose!");
      swal({
        title: "YOU LOSE!",
        icon: "error",
        button: ":(",
      });
      x.style.display = "block";
      gameover = true;
      }
    console.log("Final String Output: " + chosenWordUnderlines.toString());

    var FinalString = chosenWordUnderlines.toString();
    currentWordText.textContent = FinalString;
    
    guessesRemainingText.textContent = guessRemaining;
  }

};
