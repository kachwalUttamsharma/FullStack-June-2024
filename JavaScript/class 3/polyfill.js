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
};
// cap.petersTeam.call(ironman, "natasha", "war machine");

// write a polyfill for call
Function.prototype.myCall = function (objOnWhichReqFnToBeInvoked, ...params) {
  console.log("this :", this); //  this -> petersTeam
  // we are adding new function into ironman obj using requiredFunction key
  // value being this -> petersTeam function
  objOnWhichReqFnToBeInvoked.requiredFunction = this;
  // obj : {function() {}} obj.function() this -> obj
  objOnWhichReqFnToBeInvoked.requiredFunction(...params); // this -> ironman
  delete objOnWhichReqFnToBeInvoked.requiredFunction;
};
// cap.petersTeam.myCall(ironman, "natasha", "war machine"); // this ->
// cap

cap.petersTeam.myCall(ironman, "natasha", "war machine");
cap.petersTeam.call(ironman, "natasha", "war machine");

Function.prototype.myApply = function (objOnWhichReqFnToBeInvoked, params) {
  console.log("=============");
  console.log("this :", this); //  this -> petersTeam
  // we are adding new function into ironman obj using requiredFunction key
  // value being this -> petersTeam function
  objOnWhichReqFnToBeInvoked.requiredFunction = this;
  // obj : {function() {}} obj.function() this -> obj
  objOnWhichReqFnToBeInvoked.requiredFunction(...params); // this -> ironman
  delete objOnWhichReqFnToBeInvoked.requiredFunction;
};
cap.petersTeam.myApply(ironman, ["natasha", "war machine"]);

Function.prototype.myBind = function (objOnWhichReqFnToBeInvoked, ...params) {
  const requiredFunc = this; // petersTeam
  // returs a function
  return function (...params) {
    requiredFunc.myCall(objOnWhichReqFnToBeInvoked, ...params);
  };
};

cap.petersTeam.myBind(ironman, "natasha", "war machine")();

const abc = cap.petersTeam.myBind(ironman, "natasha", "war machine");
console.log(abc);
