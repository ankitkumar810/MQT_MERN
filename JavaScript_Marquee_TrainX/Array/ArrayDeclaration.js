// 1. map(): map Method is used to create and return a new array by applying a callback (HOF) function to each elements of an array.

const newArray = array.map((element, index, array) {
    return modifiedElement;
});

// 2. reduce(): reduce methods is used to transform an array into a single value, with callback functions having two argument accumulator, currentValue

array.reduce((accumulator, currentValue, index, array) => {
    return newAccumulator;
}, initialValue);
// 3. forEach(): 

array.forEach((element, index, array) {
// your code here
});

// 4. find(): The find() method returns the first element in an array that satisfies a provided test function, or undefined if no element matches.

// 5. filter(): Creates a new array with only all the elements that pass a test condition and else returned Empty/NullArray

const filteredArray = array.filter((element, index, array) => { 
    return condition;
});

/*
6. sort(): Sort the array
(a,b)=> a-b: ascending Order
(a,b)=> b-a: descending Order
*/

