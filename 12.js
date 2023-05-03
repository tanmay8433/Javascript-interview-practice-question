//temporal dead zone 
// temporal dead zone is behavior in js.in ecma6 
// when  declared a variable with let and const and used the before declared its given a reference error
function key() {
    console.log(tanmay);
    let tanmay = 5;
}
key()