debugger
console.log("Global Execution Context starts");
var globalVariable = "I am a global variable";

console.log(globalVariable);
console.log(greet());

globalFunction();

console.log("Global Execution Context ends");

// var globalFunction = function () {
//     console.log("Inside global function");
// };

// Function Declaration
function greet() {
    var name = 'Hastag';
    console.log('Inside Global Function');
}