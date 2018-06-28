//Input the chosen word here.
//****************************/

//need to make this word.to lowercase...
var chosenWord = "apple";
var wordLength = chosenWord.length;

var LettersInWord = [];

for (i = 0; i < chosenWord.length; i++){
    var currentLetter = chosenWord[i];
    LettersInWord.push(currentLetter);
}

console.log(LettersInWord);

//****************************/

//Link to HTML tags

var letterChoiceText = document.getElementById("letterChoice-text");
var guessesRemainingText = document.getElementById("guessesRemaining-text");
var winsText = document.getElementById("wins-text");
var losesText = document.getElementById("loses-text");
var tiesText = document.getElementById("ties-text");

//use this later after all guesses are finished.
var wins = 0;
var loses = 0;
var ties = 0;

var guessNumber = 0;
var guessRemaining = 0;

document.onkeyup = function(event) {

    if(guessNumber<15){

        letterChoiceText.textContent = event.key;
        var userLetterChoice = event.key;
        console.log(userLetterChoice);
        guessNumber++;
    
        //Loop through the letters in chosenWord, if any letters match to the user choice, do somthing.
        for (i = 0; i < LettersInWord.length; i++){
            if(userLetterChoice == LettersInWord[i]) {
                console.log(LettersInWord[i] + " matches a letter!");
                //Do somthing.
            }
            
        }
    
        guessRemaining = 15 - guessNumber;
    
        // tie back to html text.
        guessesRemainingText.textContent = guessRemaining;
        // losesText.textContent = loses;
        // winsText.textContent = wins;
    }

};