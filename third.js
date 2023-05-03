// diff between call ,apply and bind 
// call- when we invoke a function with call function its take a argument one by one 
let obj = {
    name: "tanmay",
    age: 55,
    address: "umesh nager kotdwar",
}
function mycall(greeting) {
    console.log(greeting + " " + this.name + " " + this.address + " " +
        this.age)
}
mycall.call(obj, "papa")
//apply
//  when we invoke a function with apply funciton its take a argument as Array
mycall.apply(obj, ["papa"])
//bind
// bind - when we invoke a funciton with bind method its take a arugment one by one and as a array both way but return a function;
let obj2 = {
    name: "tanmay",
    age: 55,
    address: "umesh nager kotdwar",
}
function mycall(greeting) {
    console.log(greeting + " " + this.name + " " + this.address + " " +
        this.age)

}
let data = mycall.bind(obj2);
data(papa);

