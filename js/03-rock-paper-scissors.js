/*eslint-env browser*/

var playAgain = true;

function playGame() {
    "use strict";
    var choice = window.prompt("Enter rock, paper, or scissors").toLowerCase(), computerChoice = Math.random();
    if (computerChoice > 0.66) {
        computerChoice = "rock";
    } else if (computerChoice > 0.33) {
        computerChoice = "paper";
    } else { computerChoice = "scissors"; }
    
    if (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
        window.alert("You entered " + choice + ", that's not a valid choice...");
        playAgain = true;
    } else if (choice === computerChoice) {
        window.alert("You and computer both picked " + choice + ", let's play again...");
        playAgain = true;
    } else if ((choice === "rock" && computerChoice === "scissors") || (choice === "scissors" && computerChoice === "paper") || (choice === "paper" && computerChoice === "rock")) {
        window.alert("You picked " + choice + " and computer picked " + computerChoice + ", you won!");
        playAgain = false;
    } else { window.alert("You picked " + choice + " and computer picked " + computerChoice + ", computer won!"); playAgain = false; }
}

do { playGame(); } while (playAgain);
