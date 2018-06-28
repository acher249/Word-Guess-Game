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

var userText = document.getElementById("user-text");
var computerText = document.getElementById("computer-text");
var winsText = document.getElementById("wins-text");
var losesText = document.getElementById("loses-text");
var tiesText = document.getElementById("ties-text");

//use this later after all guesses are finished.
var wins = 0;
var loses = 0;
var ties = 0;

document.onkeyup = function(event) {

    //do all the things:

    userText.textContent = event.key;
    var userLetterChoice = event.key;
    console.log(userLetterChoice);

    //Loop through the letters in chosenWord, if any letters match to the user choice, do somthing.
    for (i = 0; i < LettersInWord.length; i++){
        if(userLetterChoice == LettersInWord[i]) {
            console.log(LettersInWord[i] + " matches a letter!");
            //Do somthing.
        }
        
    }


    // tie back to html text.
    // computerText.textContent = computerChoice;
    // tiesText.textContent = ties;
    // losesText.textContent = loses;
    // winsText.textContent = wins;

};