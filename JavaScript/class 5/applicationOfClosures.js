// let iamINGEC = 200;
// function getFirstName(firstName) {
//   console.log("I have got your first Name");
//   return function getLastName(lastName) {
//     iamINGEC = 20;
//     console.log("I have got Your last Name");
//     return function greeter() {
//       console.log(`Hi I am ${firstName} ${lastName}`); // closure
//       console.log("Hi GEC", iamINGEC); // LExical scope
//     };
//   };
// }

// function currying ->
// Currying involves splitting up a function that accepts multiple arguments
// into several functions that only accept one parameter each

// getFirstName("Sheela")("N")();

// function a(d) {
//   return function b(e) {
//     return function c(f) {
//       return d + e + f;
//     };
//   };
// }

// a(2)(3)(4); // 9

// setTimeout -> window / node
// if you to execute a function after sometime (delay)

// setTimeout(callback, delay);

// let a = 10;
// console.log("Before");
// function cb() {
//   console.log(" I will explode ", a);
// }
// setTimeout(cb, 2000);
// console.log("After");

// function outer() {
//   let arrFn = [];
//   for (let i = 0; i < 3; i++) {
//     arrFn.push(function fn() {
//       console.log(i);
//     });
//   }
//   return arrFn;
// }
// let arrFn = outer();
// arrFn[0](); // 3
// arrFn[1](); // 3
// arrFn[2](); // 3
// // 0 1 2

// infinite curying

function counter(params) {
  let count = 1;
  if (params === 0) {
    return count;
  } else {
    return function inner(params) {
      count++;
      if (params === 0) {
        return count;
      } else {
        return inner;
      }
    };
  }
}

// console.log(counter(0)); // 1
// console.log(counter()(0)); //2
// console.log(counter()()(0)); // 3

// create a memoized function

function calc(n) {
  console.log("n : ", n);
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += n;
  }
  return sum;
}

function memoize(calc) {
  let cache = {};
  return function (param) {
    if (cache[param] == undefined) {
      cache[param] = calc(param);
      return cache[param];
    } else {
      return cache[param];
    }
  };
}

const optimizedCalc = memoize(calc);
console.log(optimizedCalc(3));
console.log(optimizedCalc(3));

// creating private variable using closures
