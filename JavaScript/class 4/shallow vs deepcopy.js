// const obj = {
//   A: "uttam",
//   B: "Pratik",
//   C: {
//     D: "Sheela",
//     E: "Pradeep",
//   },
// };

// // completely by reference
// const obj1 = obj;

// // shallow copy
// const obj2 = { ...obj };
// const obj3 = Object.assign({}, obj); // target , source -> target is returned

// // deep copy
const obj4 = JSON.parse(JSON.stringify(obj)); // exception function

// // polyfill for deepcopy array or an object

// // array & object
Object.prototype.superClone = function (object) {
  if (!object) {
    throw new Error(object, " is null or undefined");
  }
  const cloning = Array.isArray(object) ? [] : {};
  for (let prop in object) {
    if (object.hasOwnProperty(prop)) {
      if (Array.isArray(object[prop])) {
        // 1. what if it is an array
        //a: [ [], []]
        cloning[prop] = [];
        for (let i = 0; i < object[prop].length; i++) {
          if (
            Array.isArray(object[prop][i]) ||
            typeof object[prop][i] === "object"
          ) {
            cloning[prop][i] = this.superClone(object[prop][i]);
          } else {
            cloning[prop][i] = object[prop][i];
          }
        }
      } else if (typeof object[prop] === "object") {
        // 2. what if it is an object
        cloning[prop] = this.superClone(object[prop]);
      } else {
        // 3. what if is is not an array or object
        cloning[prop] = object[prop];
      }
    }
  }
  return cloning;
};

const arr = [1, 2, 3, [2, 1], 3];
const arr1 = Object.superClone(arr);
arr1[3][0] = 0;
// console.log(arr); // [1,2,3,[2,1], 3];
// console.log(arr1); // [1,2,3,[0,1],3];

// // ***
let a1 = function () {
  console.log("a");
};
let b1 = a1;
b1 = function () {
  console.log("b");
};
a1();
b1();
// Output is: a
//            b
// This means copying the function always behaves like primitive datatypes.
// Right? Like let a = 1; let b = a; b = 2;
// console.log(a,b) returns 1,2

const a = [
  function (a, b) {
    return a + b;
  },
];
const b = Object.superClone(a);
console.log("before updating :", a, " ", b);
b[0] = function (a, b) {
  return a * b;
};
console.log(a, " ", b);
console.log(a[0](4, 9)); // add or multiply -> multiply 36
