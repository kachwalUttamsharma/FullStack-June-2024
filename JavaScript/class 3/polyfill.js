// polyfill
// not all browsers support everything

const cap = {
  name: "Steve",
  team: "cap",
  petersTeam: function (mem1, mem2) {
    console.log(
      `Hey ${this.name} am your neighborhood 
        spiderman and I belong to ${this.team}'s 
        team with members ${mem1} and ${mem2}`
    );
  },
};

// cap.petersTeam("natasha", "war machine"); // this -> cap
const ironman = {
  name: "Tony Starx",
  team: "Iron Man",
  requiredFunction: () => {},
};
// cap.petersTeam.call(ironman, "natasha", "war machine");

// write a polyfill for call
Function.prototype.myCall = function (objOnWhichReqFnToBeInvoked, ...params) {
  console.log("this :", this); //  this -> petersTeam
  // we are adding new function into ironman obj using requiredFunction key
  // value being this -> petersTeam function
  if (typeof this != "function") {
    throw new Error(this, " is not a function");
  }
  if (
    !objOnWhichReqFnToBeInvoked ||
    typeof objOnWhichReqFnToBeInvoked != "object"
  ) {
    throw new Error(objOnWhichReqFnToBeInvoked, " is not a object");
  }

  const fnSymbol = Symbol("objectKey");
  objOnWhichReqFnToBeInvoked[fnSymbol] = this;
  // obj : {function() {}} obj.function() this -> obj
  objOnWhichReqFnToBeInvoked[fnSymbol](...params); // this -> ironman
  delete objOnWhichReqFnToBeInvoked[fnSymbol];
};
// cap.petersTeam.myCall(ironman, "natasha", "war machine"); // this ->
// cap

cap.petersTeam.myCall(ironman, "natasha", "war machine");
cap.petersTeam.call(ironman, "natasha", "war machine");

Function.prototype.myApply = function (objOnWhichReqFnToBeInvoked, params) {
  console.log("=============");
  console.log("this :", this); //  this -> petersTeam
  if (typeof this != "function") {
    throw new Error(this, " is not a function");
  }
  if (
    !objOnWhichReqFnToBeInvoked ||
    typeof objOnWhichReqFnToBeInvoked != "object"
  ) {
    throw new Error(objOnWhichReqFnToBeInvoked, " is not a object");
  }

  // we are adding new function into ironman obj using requiredFunction key
  // value being this -> petersTeam function
  const fnSymbol = Symbol("objectKey");
  objOnWhichReqFnToBeInvoked[fnSymbol] = this;
  // obj : {function() {}} obj.function() this -> obj
  objOnWhichReqFnToBeInvoked.requiredFunction(...params); // this -> ironman
  delete objOnWhichReqFnToBeInvoked[fnSymbol];
};
cap.petersTeam.myApply(ironman, ["natasha", "war machine"]);

Function.prototype.myBind = function (objOnWhichReqFnToBeInvoked, ...params) {
  if (typeof this != "function") {
    throw new Error(this, " is not a function");
  }
  if (
    !objOnWhichReqFnToBeInvoked ||
    typeof objOnWhichReqFnToBeInvoked != "object"
  ) {
    throw new Error(objOnWhichReqFnToBeInvoked, " is not a object");
  }

  const originalFunc = this; // petersTeam
  // returs a function with no parameters
  return function () {
    originalFunc.myCall(objOnWhichReqFnToBeInvoked, ...params);
  };
};

cap.petersTeam.myBind(ironman, "natasha", "war machine")(); // calling the returned function with no parameters

// Also we are storing this into requiredFunc because in line 54,
//inside that function if we use this, then that this
// refers to window/global, instead we can use arrow function as
// this refers to parent object

Function.prototype.myBind2 = function (objOnWhichReqFnToBeInvoked, ...params) {
  if (typeof this != "function") {
    throw new Error(this, " is not a function");
  }
  if (
    !objOnWhichReqFnToBeInvoked ||
    typeof objOnWhichReqFnToBeInvoked != "object"
  ) {
    throw new Error(objOnWhichReqFnToBeInvoked, " is not a object");
  }

  return () => {
    this.myCall(objOnWhichReqFnToBeInvoked, ...params);
  };
};

const abc = cap.petersTeam.myBind(ironman, "natasha", "war machine");
// console.log(abc);

cap.petersTeam.myBind2(ironman, "natasha", "war machine")();
// Arrow function is used in this bind.
