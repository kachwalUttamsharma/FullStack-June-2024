const { runMlAlgo, runMlAlgoPromise } = require("./lib");

// inversion of control

let amount = 100;
const priceOfItem = 20;

// runMlAlgo(amount, cb);

function cb() {
  amount = amount - priceOfItem;
  console.log("remaining amount in wallet : ", amount);
}

runMlAlgoPromise()
  .then((data) => {
    console.log(data);
    return cb();
    // console.log(data);
  })
  .catch((err) => {
    console.log("undefined ? ", err);
  });
