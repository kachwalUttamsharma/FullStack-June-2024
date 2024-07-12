function runMlAlgo(amount, cb) {
  console.log("running ml algo");
  console.log("processing payment");
  setTimeout(function () {
    console.log("payment done");
    cb();
    cb();
    cb();
    cb();
    cb();
  }, 1000);
}

function runMlAlgoPromise() {
  return new Promise((resolve, reject) => {
    try {
      throw new Error("error thrown from try block");
      console.log("running ml algo");
      console.log("processing payment");
      setTimeout(function () {
        console.log("payment done");
        resolve("1");
        resolve("2");
        resolve("3");
        resolve("4");
        resolve("5");
      }, 1000);
    } catch (error) {
      reject(error);
    }
  });
}
module.exports = {
  runMlAlgo,
  runMlAlgoPromise,
};
