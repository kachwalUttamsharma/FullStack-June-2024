import sum1, * as obj from "./scriptmodule1.js";

// get all exported items from scriptmodule1 as obj

// import sum1, {  fn } from "./scriptmodule1.js";
// but if i need some items i will use this syntax
// var c = 35;
// let d = "something";
// let b = "60";
// var a = 50;

console.log("from script 2", obj.a);
console.log("from script 2", obj.b);
obj.fn();
sum1();
