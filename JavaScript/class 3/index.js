// function func(param1, param2, param3) {
//   console.log("hi params are", param1, param2, param3);
// }

// function func(param1, param2, param3 = "defaultValue") {
//   console.log("hi params are", param1, param2, param3);
// }
// func("hi", "hello", "hola"); // 1
// func("hi", "hello"); // 2

// const arr = [1, 2, 3, 4, 5];
// const arr2 = arr;
// arr2.pop();
// arr2.push(100);
// arr2[2] = 200;
// console.log("arr", arr); // 1
// console.log("arr2", arr2); // 2
// 1 2 200 4 100
// pass by reference
// shallow copy

// pass by reference  -> pass by value
const num1 = 10;
let num2 = num1;
num2 += 10;
// console.log(num1, " ", num2);

// spread operator
// destructing object/ array
const arr = [1, 2, [3, 6], 4, 5];
// for(let i=0; i<arr.length; i++) {
//     arr2.push(arr[i]);
// }
// console.log(typeof JSON.stringify(arr), " ", JSON.stringify(arr));
const arr2 = JSON.parse(JSON.stringify(arr));
// const arr2 = [...arr];
arr2.pop();
arr2.push(100);
arr2[2][0] = 200;
// console.log("arr", arr); // 1 [1, 2, [3,6], 4, 5]
// console.log("arr2", arr2); // 2 [ 1, 2, 200, 4, 100 ]

const obj = {
  func: () => {
    console.log("hello");
  },
  currentDay: new Date(),
};

// console.log(obj.currentDay);
// console.log(obj.func());

const obj1 = JSON.parse(JSON.stringify(obj));
// console.log(obj1);
// console.log(obj1.func());
console.log("++++++++++++++++++++++");
obj1.func = () => {
  console.log("hello1");
};
obj1.currentDay = new Date("02-07-1997");
// console.log(obj1.currentDay);
// console.log(obj1.func());

// deep clone -> leetcode (recursive logic)

// rest operator -> rest of them
// receiving inputs
function func(param1, ...param2) {
  console.log(typeof param2, " ", Array.isArray(param2));
  console.log("hi params are", param1, param2);
}
// func("hi", "hello", "hola", "121", "124", "qwr", "qwert"); // 1
// func("hi", "hello", { 1: "dkcjnsd" }, "qwd", "123"); // 2
// func("hello", "123");
// console.log(func);

// call, bind, apply
// when to use it -> when ever you want to brrow a function from
// other obj (* if this is used inside function)
// what it does -> it changes the context this key with given object as
// argument
