// Do not worry about the next two lines, they just need to be there. 
import * as readlinePromises from 'node:readline/promises';
const rl = readlinePromises.createInterface({ input: process.stdin, output: process.stdout });

// The Game Code -----------------------------------------------------------------------------

let randomNumber = 5;   // A variable that holds the number to be guessed.
let guesses = [];       // A array (list) that is going to hold all the numbers guessed.
let gameOver = false;   // A variable that tells us if the 

// While is a loop it will continue to run as long as the gameOver variable dos not chante to true. 
while (gameOver == false) {

    say("Pick a number between 1 and 10"); // We output some text to the screen. 

    let playersGuess = await getGuess(); // We read in a value from the "keyboard".
    guesses.push(playersGuess); // We save the guess in a list so we can show them afterwards. 

    say("You guessed " + playersGuess); // We confirm what the player guessed. 

    if (randomNumber == playersGuess) { // Did the player guess the correct number?
        say("Correct");
        gameOver = true; // We set the gameOver variable to true so the game ends. 
    } else {
        say("Wrong");
    }
}

// The player guessed correctly and we summarise the number of guesses.
say("Number of guesses " + guesses.length());


// Helper functions --------------------------------------------------------------------------

// This function takes a variable named text as input, and uses the log function of console to display it in the terminal
function say(text) {
    console.log(text);
}

// This function gets whatever the user types until the Enter key is clicked. 
async function getGuess() {
    return await rl.question('Enter guess: ');
}

// Terminate the program correctly;
process.exit();