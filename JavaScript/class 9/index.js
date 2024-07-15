const fs = require("fs");

const promise = fs.promises.readFile("./f1.txt");

// promise.catch((err) => {
//   console.log(err);
// });
// promise.finally(() => {
//   console.log("final block");
// });
// promise.then((data) => {
//   console.log(data.toString());
// });

// promise
//   .finally(() => {
//     console.log("final block");
//   })
//   .then((data) => {
//     console.log(data.toString());
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// one more can have n handlers (n/3 of then n/3 of catch n/3 finally) 9
// promise.then((data) => {
//   console.log(data);
// });

// promise.then((data) => {
//   console.log(data.toString());
// });

// promise.then(() => {
//   console.log("Empty Param");
// });

// promise.catch((err) => {
//   console.log(err);
// });

// promise.catch((err) => {
//   console.log(err.toString());
// });

// promise.catch(() => {
//   console.log("Empty Param");
// });

// promise.finally((err) => {
//   console.log(err);
// });

// promise.finally((err) => {
//   console.log(err.toString());
// });

// promise.finally(() => {
//   console.log("Empty Param");
// });

//  in chain
// multiple then block can be added all consecutive then block will receive data only
// if previous then block returns a promise or a value
// multiple catch cannot be added or it is not even necessary
// promise
//   .then((data) => {
//     console.log(data);
//     // throw new Error("error thrown from then block");
//     return 3;
//   })
//   .finally(() => {
//     console.log("finally 1");
//   })
//   .finally(() => {
//     console.log("finally 2");
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .then((data2) => {
//     console.log(data2);
//   })
//   .then(() => {
//     console.log("Empty Param");
//   })

//   .finally(() => {
//     console.log("finally 3");
//   });

// Promise.resolve(1)
//   .finally((data) => {
//     console.log(data);
//     return Promise.reject("error").catch((err) => console.log(err));
//   })
//   .catch((error) => {
//     console.log(error);
//     throw "error2";
//   })
//   .finally((data) => {
//     console.log(data);
//     return Promise.reject(233).catch((error) =>
//       console.log("same line " + error)
//     );
//   })
//   .then((data) => {
//     console.log("data from then block", data);
//   })
//   .catch(console.log);

const custom = (p1, p2, p3) => {
  console.log(p1 + p2 + p3);
};

const wrapper = (fn) => {
  const p1 = 1;
  const p2 = 2;
  const p3 = 3;
  fn(p1, p2, p3);
};

wrapper(custom);
