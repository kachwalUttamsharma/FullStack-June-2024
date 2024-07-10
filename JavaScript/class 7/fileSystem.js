// import * as fs from 'fs';
const fs = require("fs");

// console.log("Before");
// const buffer = fs.readFileSync("./f1.txt");
// console.log(buffer.toString());
// console.log("after");

// console.log("Before");
// const buffer = fs.readFile("./f1.txt", function (err, data) {
//   console.log("" + data);
// });
// console.log("After");

// console.log("Before");
// let content1 = fs.readFileSync("./f1.txt");
// let content2 = fs.readFileSync("./f2.txt");
// console.log("" + content1 + "\n" + content2);
// console.log("After");

// console.log("Before");

// fs.readFile("./f1.txt", f1cb);

// // nature is async but to handle edge case
// // we are converting into sync task
// function f1cb(err, data) {
//   let content1 = data;
//   fs.readFile("./f2.txt", f2cb);
//   function f2cb(err, data) {
//     let content2 = data;
//     console.log("" + content1 + " " + content2);
//   }
// }

// console.log("After");

console.log("Before");

fs.readFile("./f1.txt", function (err, data) {
  console.log("" + data);
});
fs.readFile("./f2.txt", function (err, data) {
  console.log("" + data);
});

console.log("After");
