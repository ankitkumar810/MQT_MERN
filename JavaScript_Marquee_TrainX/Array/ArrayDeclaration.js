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

let arrayOfMarks students.map((student) =>
student.examScore.reduce((acc, curr) => curr.marks + acc, 0)
);
let sortedArray arrayOfMarks.sort((a, b) => b-a);
console.log(arrayOfMarks);
console.log(`Highest Marks: ${sortedArray[0]}`);

function sendEmail (student) {

}

let cars = ["Maruti', 'Benz' 'Breeza', 'Etios', 'Dzire']; 
let newArr = cars.splice(2, 0, 'Innova');
console.log(newArr);

// 13. findIndex (): Returns the index of the first element in an array that satisfies the provided testing function.

const markss = [10, 20, 30, 20, 50];
console.log(markss.findIndex ((value) => value == 20));
console.log(markss.find((value) => value == 20));

// 14. indexOf():find the index of a particular value we can call .indexOf which will return an index value: else -1 if not found)
