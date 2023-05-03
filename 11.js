// How do you redeclare variables in switch block without an error
//can create a nested block inside a case clause and create a new block scoped lexical environment.
let a = 5;
switch (a) {
    case 1: {
        let name;
        break;
    }
    case 2: {
        let name;
        break;
    }
}