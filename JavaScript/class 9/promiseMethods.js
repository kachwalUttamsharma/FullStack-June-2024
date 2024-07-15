// resolve and reject
// Promise.resolve

// const promise1 = Promise.reject(3);
// // throw new error
// const promise2 = 42; // resolve
// const promise3 = Promise.resolve("Random String");

// all -> only if all promises are resolve then promise will be resolve if not
// it will rejected
// all or none
// Promise.all([promise1, promise2, promise3])
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("execution done");
//   });

// irrespictive of any result then block will get executed
// Promise.allSettled([promise1, promise2, promise3])
//   .then((data) => {
//     console.log(data);
//     throw new Error("Error");
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("execution done");
//   });

const promise4 = new Promise((resolve, reject) => {
  try {
    setTimeout(() => {
      reject("promise 4 resolved");
    }, 500);
  } catch (error) {
    reject(error);
  }
});
const promise5 = new Promise((resolve, reject) => {
  try {
    setTimeout(() => {
      reject("promise 5 resolved");
    }, 1000);
  } catch (error) {
    reject(error);
  }
});

// simply frist result irrespective of resolving or rejecting
// Promise.race([promise4, promise5])
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("execution done");
//   });

Promise.any([promise4, promise5])
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log("error message", err);
  })
  .finally(() => {
    console.log("execution done");
  });

// all | allsettled | race | any
