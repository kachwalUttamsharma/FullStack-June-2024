// const promise = Promise.resolve("Resolved value");

// promise.then(function (value) {
//   console.log("Resolved: ", value); // Resolved: Resolved Value
// });

// const promiseReject = Promise.reject("some error");

// promiseReject
//   .then(function () {
//     console.log("This will not be executed");
//   })
//   .catch(function (err) {
//     console.log("Caught an error: ", err); // Caught an error: some error
//   });

// from finally
// when promise is getting resolved it wont have any effect
// when error is thrown, it need to be catched
// when promise is getting reject it need to be again cached
// i> immediately catched
// ii> down the chain catch block (then execution stops there)
// let promise = Promise.resolve(10);
// promise
//   .finally((data) => {
//     console.log("finally 1 : ", data); // finally undefined
//     //return 5;
//     return Promise.reject(3).catch((err) => console.log(err));
//   })
//   .then(function (data) {
//     console.log("step 1 : ", data); // 10
//     return data * 2;
//   })
//   .then(function (firstThenVal) {
//     console.log("step 2 : ", firstThenVal); // 20
//     return firstThenVal + 2;
//   })
//   .then(function (secondThenVal) {
//     console.log("step 3 : ", secondThenVal); // 22
//     return secondThenVal + 3;
//   })
//   .then(function (thirdThenVal) {
//     console.log("step 4: ", thirdThenVal); // 25
//   })
//   .catch(function (err) {
//     console.log(err);
//   });

// Promise.resolve("promise reject")
//   .finally(() => {
//     return Promise.reject("finally reject");
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// let p = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     reject(new Error(300));
//   }, 2000);
//   resolve(100); // return
//   setTimeout(function () {
//     reject(new Error(401));
//   }, 200);
//   resolve(200);
//   setTimeout(function () {
//     reject(new Error(500));
//   }, 2000);
// });

// p.then(function (data) {
//   console.log(1);
// })
//   .catch(function (err) {
//     console.log(2);
//     console.log(err);
//   })
//   .finally(function () {
//     console.log(3);
//   });

// Promise.resolve(1)
//   .then(() => 2)
//   .then(3)
//   .then((value) => console.log(value * 3))
//   .then(Promise.resolve(4));

// Promise.resolve(1)
//   .then(() => {
//     return 2;
//   })
//   .then(3)
//   .then((value) => console.log(value * 3))
//   .then(Promise.resolve(4));

// Promise.resolve(1)
//   .then(() => {
//     return Promise.resolve(2);
//   })
//   .then(3)
//   .then((value) => console.log(value * 3))
//   .then(Promise.resolve(4));

// Promise.resolve(1)
//   .finally((data) => {
//     console.log("3", data);
//     return Promise.reject("error");
//     console.log("7", error);
//     throw error;
//   })
//   .finally((data) => {
//     console.log("11", data);
//     let rPromise = Promise.resolve(2);
//     let thenPromise = rPromise.then(console.log);
//     return thenPromise;
//   })
//   .then(console.log, function (err) {
//     console.log("error coming from then block : ", err);
//   })
//   .catch(console.log);
