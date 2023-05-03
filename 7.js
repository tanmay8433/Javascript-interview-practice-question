// first class function 
const handler = () =>
    console.log("hello")
document.addEventListener("click", handler)
// first order function
const firsrorder = () => console.log("hello");
// high order function 
const firstorder = () => console.log("hello");
const highorder = (Returnfirstorder) => Returnfirstorder();
highorder(firstorder);
//unary function
const first = (a) =>
    console.log(a + 10);
first(4);