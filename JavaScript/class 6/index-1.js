const candidate = {
  fly: true,
  canTalk: function () {
    return "Sorry, can't talk";
  },
};

const user = {
  Cancook: true,
  canCode() {
    return "can't code";
  },
  // inherit the properties
  __proto__: candidate,
};

Object.assign(user, candidate);

console.log(user.fly);

class candidate1 {
  constructor() {
    this.fly = true;
  }
  canTalk = function () {
    return "Sorry, can't talk";
  };
}

class user1 extends candidate1 {
  constructor() {
    this.Cancook = true;
  }
  canCode() {
    return "can't code";
  }
}
