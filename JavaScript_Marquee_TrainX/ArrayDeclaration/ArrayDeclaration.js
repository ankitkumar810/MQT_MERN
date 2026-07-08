// 1. map(): map Method is used to create and return a new array by applying a callback (HOF) function to each elements of an array.

const newArray = array.map((element, index, array) {
    return modifiedElement;
});


// 2. reduce(): reduce methods is used to transform an array into a single value, with callback functions having two argument accumulator, currentValue

array.reduce((accumulator, currentValue, index, array) => {
    return newAccumulator;
}, initialValue);