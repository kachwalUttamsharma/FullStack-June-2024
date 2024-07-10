/**
 * Synchronous code -> the code that executes line by line
 */

// console.log("Before");
// function fn() {
//   console.log("I am fn");
// }

// fn();
// console.log("After");

/**
 * Asynchronous code -> piece of code that's executed at the current point of time
 * and other piece of code is executed on later part
 */

// console.log("Before");
// function fn() {
//   console.log("I am fn");
// }
// setTimeout(fn, 2000);

// console.log("After");

// let a = true;
// console.log("Before");
// setTimeout(() => {
//   a = false;
//   console.log("I broke the while loop");
// }, 1000);
// console.log("After");

// while (a) {

// }

// console.log("Before");
// const cb2 = () => {
//   console.log("Set timeout 1");
//   while (1) {}
// };
// const cb1 = () => console.log("hello");
// setTimeout(cb2, 3000);
// setTimeout(cb1, 2000);
// console.log("After");

console.log("Before");

const cb2 = () => {
  console.log("Set timeout 1");
  console.log(Date.now());
  let timeInFuture = Date.now() + 5000;
  console.log(timeInFuture);
  while (Date.now() < timeInFuture) {}
};

const cb1 = () => console.log("hello");

setTimeout(cb2, 1000);

setTimeout(cb1, 2000);

// queue cb2 , cb1
console.log("After");
