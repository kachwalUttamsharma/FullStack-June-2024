"use strict";
function sample() {
  console.log(this);
}
// sample();

const arr = [1, 2, 3, 4, 5];

const arr1 = [6, 7, 8, 9, 10];

// console.log(typeof arr);

// console.log(Array.isArray(arr));

Array.prototype.sum = function () {
  let sum = 0;
  for (let i = 0; i < 10; i++) {
    sum += i;
  }
  return sum;
};

// console.log(arr.sum());

let cap = {
  name: "Steve",
  team: "cap",
  petersTeam: function (mem1, mem2) {
    console.log(
      `Hey ${this.name} am your neighborhood spiderman and I belong to ${this.team}'s team`
    );
    console.log(`I am working with ${mem1} & ${mem2} `);
  },
};

cap.petersTeam("srinivas", "aditya"); // this -> cap

// DRY - do not repeat yourself
const ironman = {
  name: "Tony Starx",
  team: "Iron Man",
};

// call, bind, apply
// Borrowing a function from the object and can be
// used for another object without actually adding to it.

// changes the context of this to provided object
// call(this object, comma seprated arguments);
// apply(this object, [comma seprated argument]);
// bind works like call but it returns function which can be executed in future
cap.petersTeam.call(ironman, "natasha", "war machine"); // this -> cap | -> ironman
cap.petersTeam.apply(ironman, ["natasha", "war machine"]);
const ironManStolen = cap.petersTeam.bind(ironman, "natasha", "war machine");
console.log(ironManStolen);
ironManStolen();
// parameters -> when your function is called, function expect params
// argument -> when you call a function you pass arguments into it
