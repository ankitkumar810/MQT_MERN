function greet(name){
    return `Hello, ${name}!`;
}

let greetMsg = greet('Ankit Kumar')
console.log(greetMsg);

 greetMsg = greet('Aakash Kumar')
console.log(greetMsg);

 greetMsg = greet('Vinay')
console.log(greetMsg);

 greetMsg = greet('Aakash Kumar')
console.log(greetMsg);


/* Function declarations, expressions, and arrow functions: 
In JavaScript, function declarations, expressions, and arrow functions serve different purposes and have distinct characteristics

Note: Hoisting differences between declaration and expression

Function Declarations: These are the most common way to define functions in
JavaScript. They use the function keyword and can be hoisted to the top of their scope, allowing them to be called before they are defined.
*/ 