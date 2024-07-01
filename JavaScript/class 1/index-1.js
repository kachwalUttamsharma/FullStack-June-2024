// let a = 10;

// function fn() {
//   console.log("I am fn"); // 1

//   function inner() {
//     console.log("I am inner"); // 2
//   }
//   inner();
// }
// fn();

// real();
// function real() {
//   console.log("I am real, Always run me"); // 1
// }
// function real() {
//   console.log("No I am real one"); // 2
// }
// function real() {
//   console.log("you both are fake"); // 3
// }

// console.log(x);
// x = 5;
// var x;
// console.log(x);

// MC             E
// x = undefined  undefined
//   = 5             x = 5
//                 5

// all declaration : in MC
// all definition : in HEAP
// all execution: in CALL STACK in this correct

// console.log(y);
// y = 5;
// let y;
// console.log(y);

// const z = true;
// let name = "pratik";
// console.log(z);
// console.log(name);

// let a = 10;
// console.log("line number 2", a);

// function fn() {
//   let a = 20;
//   console.log("line number 4", a);
//   a++;
//   console.log("line number 7", a);
//   if (a) {
//     a = 30;
//     a++;
//     console.log("line number 11", a);
//   }
//   console.log("line number 13", a);
//   function fn1() {
//     let a = 20;
//     console.log("line number 4", a);
//     a++;
//     console.log("line number 7", a);
//     if (a) {
//       a = 30;
//       a++;
//       console.log("line number 11", a);
//     }
//     console.log("line number 13", a);
//   }
//   fn1();
// }
// fn();
// console.log("line number 16", a);

// 10,20,21,31
// 10,20,21,31,31
// 10,20,21,30,31,31

var fruits = "apple";
console.log(fruits); // 1 apple
{
  console.log(fruits); // 2 reference error | apple
  var fruits;
  console.log(fruits); // 3 undefined
  fruits = "orange";
  {
    console.log(fruits); // 4 orange
  }
  console.log(fruits); // 5 orange
}
console.log(fruits); // 6 apple

//  var is global scope and functional
// let and const are block scope
// In memory creation step or in hoisting
//    1. In GEC let & const goes into script (TDZ) and
//   var goes into global
//    2. In any other execution context let &
// const goes into block scopes and var goes into global
// 3. if let is not defined in Block it will take value from upward Block, Script
// 4. if var is defined in Block it will go into Global
