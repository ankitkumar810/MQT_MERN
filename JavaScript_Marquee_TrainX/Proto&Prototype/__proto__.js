// 1. "._proto_" is a property in 'object' that point to inherited properties and methods from object, means if properties and methods are not available then try to access from inherited object
//2_proto_ works in Object() to access, modify or update inherit


// let vikas = {
//     name: 'Vikas',
//     age: 29,
//     email: 'vikas.trainer@gmail.com',
// let str = 'Aakash';

// console.log(Object().__proto__);
// String.prototype.reverse=function(){
//     let reversedStr='';
//     for(let i=this.length-1; i>=0; i--){
//         reversedStr+=this[i];
//     }
//     return reversedStr;
// }

// class ReverseString {
//     constructor(str){
//         this.str =str;
//     }

//     reverse(){
//         return this.str.split("").reverse().join();
//     }
// }
//  const obj =  new ReverseString("Aakash");


let str = "laksh"
let name = "prashant"
str.__proto__.Reverse=function() {
  return this.split("").reverse("").join("");
}
console.log(Object().__proto__);

console.log(str.Reverse());
console.log(name.Reverse());