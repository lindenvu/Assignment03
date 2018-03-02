/*eslint-env browser*/
/*
var numOne = parseInt(window.prompt("Enter a number"), 10);
var numTwo = parseInt(window.prompt("Enter another number"), 10);
var choice = window.prompt("Enter add, subtract, multiply, divide").toLowerCase();
*/
var runAgain = true;

function calculate(numOne, numTwo, choice) {
    "use strict";
    var answer, msg;
    if (choice !== "add" && choice !== "subtract" && choice !== "multiply" && choice !== "divide") {
        window.alert("You entered " + choice + ", that is not a valid chocie, let's try again...");
        runAgain = true;
    } else {
        switch (choice) {
        case "add":
            msg = " plus ";
            answer = numOne + numTwo;
            break;
        case "subtract":
            msg = " minus ";
            answer = numOne - numTwo;
            break;
        case "multiply":
            msg = " times ";
            answer = numOne * numTwo;
            break;
        case "divide":
            msg = " divided by ";
            answer = numOne / numTwo;
            break;
        }
        window.alert(numOne + msg + numTwo + " is " + answer);
        runAgain = false;
    }
}

do { calculate(parseInt(window.prompt("Enter a number"), 10), parseInt(window.prompt("Enter another number"), 10), window.prompt("Enter add, subtract, multiply, divide").toLowerCase()); } while (runAgain);