// what is a purpose of let keyword
// let given a block scope in local variable, let introduce in es6 feature 
let a = 10;
function key() {
    let a = 5;
    console.log(a)
}
key()
console.log(a);