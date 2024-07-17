// cafe => getMenu => put order => served => generate bill => Payment => exit

function getMenu(time) {
  console.log("I have entered the cafe");
  const flag = time >= 6 && time <= 10 ? true : false;
  const menu = new Promise(function (resolve, reject) {
    console.log("I have asked for the menu");
    if (flag) {
      resolve("menu is shared or given");
    } else {
      reject("Cafe is Closed, can you come back between 6 and 10");
    }
  });
  return menu;
}

function placeAnOrder(item1, item2) {
  const arr = ["Tea", "Coffee", "MilkShakes", "Biscuits"];
  const orderStatus = new Promise(function (resolve, reject) {
    if (arr.includes(item1) && arr.includes(item2)) {
      resolve(`Order has been placed for ${item1} and ${item2}`);
    } else {
      reject("One of the item or all items are not available that you ordered");
    }
  });
  return orderStatus;
}

function serve() {
  const servingOrder = new Promise(function (resolve) {
    setTimeout(() => {
      resolve(`Order is served, enjoy your time`);
    }, 5000);
  });
  return servingOrder;
}

function generateBill() {
  const bill = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Pay the bill of 500 rupees");
    }, 1500);
  });
  return bill;
}

// getMenu(7)
//   .then((menu) => {
//     console.log(menu);
//     return placeAnOrder("Tea", "Biscuits");
//   })
//   .then((orderStatus) => {
//     console.log(orderStatus);
//     return serve();
//   })
//   .then((orderBeingServed) => {
//     console.log(orderBeingServed);
//     return generateBill();
//   })
//   .then((bill) => {
//     console.log(bill);
//     console.log("payment is done");
//     console.log("Thank you for visiting us, and keep visiting");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// async await makes your life easy

console.log("before");
console.log("before");
console.log("before");
console.log("before");

async function cafeFlow() {
  try {
    console.log("inside asyn funct");
    const menu = await getMenu(7);
    const placingAnOrder = await placeAnOrder("Tea", "Biscuits");
    const orderBeingServed = await serve();
    const bill = await generateBill();
    console.log(menu);
    console.log(placingAnOrder);
    console.log(orderBeingServed);
    console.log(bill);
    console.log("payment is done");
    console.log("Thank you for visiting us, and keep visiting");
  } catch (err) {
    console.log(err);
  }
}
cafeFlow();

console.log("after");
console.log("after");
console.log("after");
console.log("after");
console.log("after");
