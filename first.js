// what are the possible way to create obj in js
//1way
let obj = {
    name: "tanmay",
    address: "umesh nager",
    mobileno: "95612014"
}
//2way
let obj2 = new Object();
//3way
let obj3 = Object.create(null);
//4way
function person(name) {
    this.name = name;
    this.age = 32;
}

let obj4 = new person("tanmay");
//5 way
let obj5 = new (function () {
    this.name = "tanmay";
})();
//6way 
class key {
    constructor(name) {
        this.name = name;
    }
}
let obj6 = new key("tanmay");
console.log(obj);
console.log(obj2);
console.log(obj3);
console.log(obj4);
console.log(obj5);
console.log(obj6);