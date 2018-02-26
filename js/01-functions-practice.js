/*eslint-env browser*/
//STEP 1

function halfNumber(aNumber) {
    "use strict";
    window.console.log("Half of " + aNumber + " is " + aNumber / 2);
    return aNumber / 2;
}
halfNumber(parseInt(window.prompt("Enter a number"), 10));
//STEP 2
function squareNumber(aNumber) {
    "use strict";
    window.console.log("The result of squaring the number " + aNumber + " is " + aNumber * aNumber);
    return aNumber * aNumber;
}
squareNumber(parseInt(window.prompt("Enter a number"), 10));
//STEP 3
function percentOf(numberOne, numberTwo) {
    "use strict";
    var percent = Math.round((numberOne / numberTwo) * 100) + "%";
    window.console.log(numberOne + " is " + percent + " of " + numberTwo);
    return percent;
}
percentOf(parseInt(window.prompt("Enter a number"), 10), parseInt(window.prompt("Enter another number"), 10));
//STEP 4
function findModulus(numberOne, numberTwo) {
    "use strict";
    window.console.log(numberOne % numberTwo + " is the modulus of " + numberOne + " and " + numberTwo);
    return numberOne % numberTwo;
}
findModulus(parseInt(window.prompt("Enter a number"), 10), parseInt(window.prompt("Enter another number"), 10));

//STEP 5
function sumNumbers(numbers) {
    "use strict";
    var i, sum = 0, msg = "The sum of ";
    for (i = 0; i < arguments.length; i += 1) {
        sum += Number(arguments[i]);
        msg = msg + arguments[i] + " ";
    }
    msg = msg + "is " + sum;
    window.console.log(msg);
    return sum;
}
var sumPrompt = window.prompt("Enter 3 numbers separated by commas");
var parseSumPrompt = sumPrompt.split(",");
sumNumbers(parseSumPrompt[0], parseSumPrompt[1], parseSumPrompt[2]);