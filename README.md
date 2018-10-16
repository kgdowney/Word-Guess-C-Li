
# Constructor Word Guess

### Overview

In this project, I created a Word Guess command-line game using constructor functions.

Here's a quick video demonstration: https://drive.google.com/file/d/1TgWUab0Uja8ICREiA45GkSCFl34VqQDg/view?usp=sharing

## Description

1. The completed game receives user input using the `inquirer` or `prompt` npm packages.

2. The solution has the following three files:

* **Letter.js**: Contains a constructor, Letter. This constructor displays an underlying character or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. That means the constructor defines:

* **Word.js**: Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. That means the constructor defines:

* **index.js**: The file containing the logic for the course of the game, which depends on `Word.js` and:

  * Randomly selects a word and uses the `Word` constructor to store it

  * Prompts the user for each guess and keeps track of the user's remaining guesses


To run the CLI Word Guess Game, please follow the steps below:
'''
    git clone git@github.com:kgdowney/Word-Guess-C-Li.git
    cd Word-Guess-C-Li
    npm install
    node index.js'
'''

