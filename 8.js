//what is currying function 
// currying is a process to taking a function with multiple argument and turing it into a sequence of functions each with single argument.
const key = (a, b, c) => a + b + c;
console.log(key(1, 2, 3));
const key2 = (a) => (b) => (c) => a + b + c;
console.log(key2(1)(5)(9));