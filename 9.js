// what is pure function ?
// Pure functions are functions that don't produce side effects and, when called with the same input parameters,
// will always return the same output. 
// You can use pure functions to ensure your code is clean, maintainable, and testable.
const array = [];
//impure
const key = (number) => array.push(number);
console.log(key(2))
console.log(array);
//pure
const key2 = (number) => (number2) =>
    number2.concat([number]);
console.log(key2(6)(array))