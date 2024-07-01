// variable & Data types

var a = 10;
var a = "uttam";
// console.log(a);

// redeclaring the same variable
// global context

let b = 10;
// let b = 20;

// redeclaring same variable is not allowed

var c = 20;
c = "teddy";
// console.log(c);

// reinstialisation is possible

let d = 30;
d = "bear";
// console.log(d);

// let reinstalisation is possible

const e = "err";
// e = "hello";
// console.log(e);

// only once can be intialized on const

//       redeclare    reinitialize
// var     yes          yes
// let     no           yes
// const   no           no

const captainAmerica = {
  firstName: "Steve",
  lastName: "Rogers",
  isAvenger: true,
  Age: 80,
  address: {
    city: "manhatten",
    state: "new york",
  },
  movies: ["Civil War", "Captain America", "The First Avenger"],
  saveTheWorld: function () {
    console.log("On the Way ! consider it done");
  },
};

// number, string, boolean, object, array, function
// in order to access any key from object you have use object.key
// captainAmerica.saveTheWorld();
// console.log(
//   "cap name : " + captainAmerica.firstName + " " + captainAmerica.lastName
// );

for (let key in captainAmerica) {
  console.log(key, " ", captainAmerica[key], " ", captainAmerica.key);
}

// in order to access keys out of objects we have 2 ways

// 1. using . (dot operator)
// 2. using [] (square bracket)
// use [] when dont know exact key

let firstName = "Age";
console.log(captainAmerica[firstName]); // captainAmerica.undefined
console.log(captainAmerica["firstName"]); // captainAmerica.firstname
