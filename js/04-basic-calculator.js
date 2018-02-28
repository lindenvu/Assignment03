/*eslint-env browser*/
/*
var numOne = parseInt(window.prompt("Enter a number"), 10);
var numTwo = parseInt(window.prompt("Enter another number"), 10);
var choice = window.prompt("Enter add, subtract, multiply, divide").toLowerCase();
*/
var runAgain = true;

function calculate(numOne, numTwo, choice) {
    var answer;
    if(choice !== "add" && choice !== "subtract" && choice !== "multiply" && choice !== "divide"){
        window.alert("You entered " + choice + "That is not a valid chocie, let's try again...");
        runAgain = true;
    } else {
  
        switch(choice) {
            case "add":
                code block
                break;
            case "subtract":
                code block
                break;
            case "multiply":
                code block
                break;
            case "divide":
                code block
                break;
        }
        window.alert(numOne + " " + choice + " is " + answer);
        rungAgain = false;
    }
}

do { calculate(parseInt(window.prompt("Enter a number"), 10), parseInt(window.prompt("Enter another number"), 10), window.prompt("Enter add, subtract, multiply, divide").toLowerCase()); } while (runAgain);