// closure function 
// closure is technique which child function have access or use a flexiable scope of parent function
function key(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        }
    }
}
console.log(key(1)(4)(7))