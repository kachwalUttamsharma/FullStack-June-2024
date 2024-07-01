// Native vs Host(env)  -> objects
// Host -> os, process, (depends on environment)
// Native -> window,date, json

// this keyword -> is actually
// pointing to some object depending on context object
// it refers to keep changing

// Rules:
// 1. For Global Execution context this will be a window object.
// 2. For Execution context created with method
// call(calling with object), this will be that object.
// 3. For Execution context created with a function
// call(calling without object), this will be that window.

// console.log("hello from ", this); // 1
// console.log("hello from ", window);

// const captainAmerica = {
//   firstName: "Steve",
//   lastName: "Rogers",
//   isAvenger: true,
//   Age: 80,
//   address: {
//     city: "manhatten",
//     state: "new york",
//   },
//   movies: ["Civil War", "Captain America", "The First Avenger"],
//   saveTheWorld: function () {
//     console.log("2 On the Way ! consider it done", this); // captainAmerica
//   },
// };

// const saveTheWorld1 = function () {
//   console.log("1 On the Way ! consider it done", this);
// };

// saveTheWorld1();
// captainAmerica.saveTheWorld();

// let cap = {
//   firstName: "Steve",
//   sayHi: function () {
//     console.log("53", this.firstName);
//     const iAmInner = function () {
//       console.log("55", this.firstName);
//     };
//     iAmInner();
//   },
// };
// cap.sayHi(); // this -> cap

// right
// 53 Steve
// 55 undefined

// wrong
// 53 Steve
// 55 Steve

// function () {
//     console.log("53", this.firstName); // 53 steve
//     const iAmInner = function () {
//       console.log("55", this.firstName);// 55 undefined
//     };
//     iAmInner(); // this -> window === global
//   },

// ES 6 ECMA
// arrow function -> wont have it own this it will inherit from
// parent in chain
let cap1 = {
  firstName: "Steve",
  sayHi: function () {
    console.log("53", this.firstName); // 53 steve
    const iAmInner = function () {
      console.log("55", this.firstName); // 55 undefined
    };
    iAmInner();
  },
};
cap1.sayHi(); // GEC - window

// when arrow function is considered
// GEC (this -> window )-> sayHI() -> new EC (this -> window)
// -> isAmInner EC (this -> window)
//53 undefined
//55 undefined

// 53 steve
// 55 steve

//                        non-strict	        strict
// GEC	                  Window Object	        window
// Function call w/o obj  Window Object	        undefined
// Function call with obj Current object	    current object
// Arrow function	this from outer context	    this from outer context
