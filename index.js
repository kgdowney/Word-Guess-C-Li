// * **index.js**: The file containing the logic for the course of the game, which depends on `Word.js` and:

//   * Randomly selects a word and uses the `Word` constructor to store it

//   * Prompts the user for each guess and keeps track of the user's remaining guesses

var Word = require("./word.js");
var inquirer = require("inquirer");

var wordBank = [
    "iphone", "apple", "imac",
    "applewatch", "macbookpro", "emac"
];

var guesses;
var pickedWords;
var word;
var pickedWord;

function init() {
    pickedWords = [];
    console.log("Welcome to the best word game you'll ever play (in the console)");
    console.log("-------------------------------------------");
    playGame();
}
function playGame() {
    pickedWord = "";
    guesses = 15;
    if(pickedWords.length < wordBank.length) {
        pickedWord = getWord();
    } else {
        //WINNN
        console.log("Congratulations, you win!");
        continuePrompt();
    }
    if(pickedWord) {
        word = new Word(pickedWord);
        word.makeLetters();
        makeGuess();
    }
}

function getWord() {
    var rand = Math.floor(Math.random() * wordBank.length);
    var randomWord = wordBank[rand];
    if(pickedWord.indexOf(randomWord) === -1) {
        pickedWords.push(randomWord);
        return randomWord;
    } else {
        return getWord();
    }
}

function makeGuess() {
    var checker = [];
    inquirer.prompt([
        {
            name: "guessedLetter",
            message: word.update() +
            "\nGuess a letter!" +
            "\nGuesses Left: " + guesses
        }
    ])
.then(data => {
    word.letters.forEach(letter => {
        letter.checkLetter(data.guessedLetter);
        checker.push(letter.getCharacter());
    });
    if(guesses > 0 && checker.indexOf("_") !== -1) {
        guesses--;
        if(guesses === 0) {
            console.log("No more guesses! GAME OVER BRAH");
            continuePrompt();
        } else {
            makeGuess();
        }
    } else {
        console.log("Wow, congrats! You guessed the word!");
        console.log(word.update());
        playGame();
    }
});
}

function continuePrompt() {
    inquirer.prompt([
        {
            name: "continue",
            type:"list",
            message: "Would you like to play again??",
            choices: ["Yes", "No"]
        }
    ])
    .then(data => {
        if(data.continue === "Yes") {
            init();
        } else {
            console.log("Great job, thanks for playing");
        }
    });
}

init();