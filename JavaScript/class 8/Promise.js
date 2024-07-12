// const fs = require("fs");

// // console.log("Before");
// const promise = fs.promises.readFile("./f1.txt");
// promise
//   .then((futureValue) => {
//     console.log(futureValue.toString());
//     const promise2 = fs.promises.readFile("./f2.txt");
//     promise2
//       .then((futureValue) => {
//         console.log(futureValue.toString());
//         const promise3 = fs.promises.readFile("./f3.txt");
//         promise3
//           .then((futureValue) => {
//             console.log(futureValue.toString());
//             const promise4 = fs.promises.readFile("./f4.txt");
//             promise4
//               .then((futureValue) => {
//                 console.log(futureValue.toString());
//               })
//               .catch((err) => {
//                 throw new Error(err);
//               });
//           })
//           .catch((err) => {
//             throw new Error(err);
//           });
//       })
//       .catch((err) => {
//         throw new Error(err);
//       });
//   })
//   .catch((err) => {
//     throw new Error(err);
//   });

// [1,2,3].map((v) => v*3).filter((v) => v%2 === 0);
// [3,6,9].filter() -> 6

// promise
//   .then((future) => {
//     console.log(future.toString());
//     return fs.promises.readFile("./f2.txt");
//   })
//   .then((future2) => {
//     console.log(future2.toString());
//     return fs.promises.readFile("./f3.txt");
//   })
//   .then((future3) => {
//     console.log(future3.toString());
//     return fs.promises.readFile("./f4.txt");
//   })
//   .then((future4) => {
//     console.log(future4.toString());
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// console.log("After");

// then() - success
// catch() - error

// function promiseReadFile(filePath) {
//   return new Promise((resolve, reject) => {
//     fs.readFile(filePath, function (err, data) {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// }

// squence action ->
// promiseReadFile("./f1.txt")
//   .then((future) => {
//     console.log(future.toString());
//     return promiseReadFile("./f2.txt");
//   })
//   .then((future2) => {
//     console.log(future2.toString());
//     return promiseReadFile("./f3.txt");
//   })
//   .then((future3) => {
//     console.log(future3.toString());
//     return promiseReadFile("./f5.txt");
//   })
//   .then((future4) => {
//     console.log(future4.toString());
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("finally block is getting executed");
//   });
