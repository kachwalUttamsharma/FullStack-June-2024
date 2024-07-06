// var varName = 10;

// function fn() {
//   var varName = 20;
//   function b() {
//     console.log("in b", varName);
//   }
//   console.log(varName); // 20
//   return b;
// }

// const returnedFn = fn();
// returnedFn(); // 20

// function outerFunction() {
//   let count = 0;
//   // its memory + lexical scope this function will be able access
//   function innerFunction() {
//     count++;
//     return count;
//   }
//   return innerFunction;
// }

// const innerFunc = outerFunction();
// console.log(innerFunc()); // 1
// console.log(innerFunc()); // 2
// console.log(innerFunc()); // 3

// let a = 10;
// function createCounter(init, delta) {
//   function count() {
//     init = init + delta + a;
//     return init;
//   }
//   return count;
// }

// let c1 = createCounter(10, 5);
// console.log(c1());
// console.log(c1());
// // 15 20
// let c2 = createCounter(5, 7);
// console.log(c2()); // 12
// console.log(c2()); // 19

// console.log(createCounter(2, 3)()); // 5
// console.log(createCounter(2, 3)()); // 5

let iamINGEC = 200;
function getFirstName(firstName) {
  console.log("I have got your first Name");
  return function getLastName(lastName) {
    iamINGEC = 20;
    console.log("I have got Your last Name");
    return function greeter() {
      console.log(`Hi I am ${firstName} ${lastName}`); // closure
      console.log("Hi GEC", iamINGEC); // LExical scope
    };
  };
}

const fnNameReturn = getFirstName("Umesh");
console.log(fnNameReturn); //I have got your first Name
const lnNameReturn = fnNameReturn("Bachchani");
console.log(lnNameReturn); //I have got Your last Name
lnNameReturn();
// Hi I am Umesh Bachchani
// Hi GEC , 200
