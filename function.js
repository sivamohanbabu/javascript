//function -to perform the multiple task with the single code
// code reusabily
// function add() {
//   var a = 67;
//   var b = 78;
//   document.write(a + b);
//   console.log(a + b);
// }

// add();
//ES6
// const add = () => {
//   var a = 89;
//   var b = 90;
//   document.write(a + b);
//   console.log(a + b);
// };
// add();
//ES7

// const add = (a, b) => console.log(a + b);
// add(78, 90);
//hoisting - to declare the variable to the top
// console.log(b);
// b = 45;

let name = "john";

function demo() {
  let name = "siva";
  document.write(`Hello, my name is ${name}`);
}
document.write(`Hello, my name is ${name}`);
demo();
