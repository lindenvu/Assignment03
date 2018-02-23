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
percentOf(parseInt(window.prompt("Enter two numbers separated by a comma"), 10));
//STEP 4
function findModulus(numberOne, numberTwo) {
    "use strict";
    window.console.log(numberOne % numberTwo + " is the modulus of " + numberOne + " and " + numberTwo);
    return numberOne % numberTwo;
}
findModulus(parseInt(window.prompt("Enter two numbers separated by a comma"), 10));
//STEP 5
function sumNumbers() {
    "use strict";
}
sumNumbers(parseInt(window.prompt("Enter several numbers separated by commas"), 10));