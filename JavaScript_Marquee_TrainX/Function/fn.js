//function can be passed as an argument too
// function sayHello(name){
//     return `Hello, ${name}!`;
// }
// function execute(fn, name){
//     fn();
// }
// execute(sayHello, 'Ankit');

// function Morning(){
//     console.log('Hello good morning');
// }
// function greet(){
//     return Morning();
// }


var sayBye function() {
    return 90;
};
let val = sayBye();
console.log(val);

/*
 REST, Spread, Default Parameters
Rest Operator: Collects multiple values into a single array (or object). (...)
1. In a function parameter list to gather extra arguments.
2. In restructuring to gather remaining elements/properties.
Spread: Expand karta hai.

*/
function collectValue(...args) {
// REST
    console.log(typeof args);
}
let values = [1, 4, 5, 'Hello'];
// Spread
collectValue(...values);