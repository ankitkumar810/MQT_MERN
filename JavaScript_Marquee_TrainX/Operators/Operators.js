/* Special Operators:
1) Nullish Collesing Operator??:
The nullish coalescing operator (??) is a logical operator in JavaScript that returns its right-hand side operand when its left-hand side operand is null or undefined.
Example:
*/

let name = null;
let displayName = name ?? "Guest"; // Guest
console.log(displayName);
name="Vikas";
let anotherName = "Aisha" ?? "Guest"; // Aisha

/*
2) Optional Chaining (.?) :
Optional chaining (?.) in JavaScript is an ES2020 feature that
lets you
* Safely access nested object properties,
* Array elements, or
* Call functions without throwing an error if an intermediate value is null or undefined - instead, it returns undefined
*/

const user = { profile: { city: 'Ahmedabad' } };
console.log(user?.profile?.city);

/*
What is Difference between == and === ?
In JavaScript, both == and === are comparison operators, but they behave differently due to type coercion rules.
1) == (Loose Equality): Compares two values for equality after converting them to a common type (type coercion).
Note: This can lead to unexpected results because JavaScript automatically converts types before comparison.
*/
console.log([] == false);