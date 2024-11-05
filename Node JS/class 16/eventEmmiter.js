const eventEmitter = require("events");
const myEmitter = new eventEmitter();

myEmitter.on("myEvent", (...args) => {
  console.log("There is a new Event! ", args);
});

const secondCB = (...args) => {
  console.log("another listener for the new Event! ", args);
};
myEmitter.on("myEvent", secondCB);

myEmitter.emit("myEvent");
myEmitter.off("myEvent", secondCB);
myEmitter.emit("myEvent", 1, 2);

myEmitter.emit("myEvent", [1, 2, 3]);
