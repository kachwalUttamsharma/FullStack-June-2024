const promise1 = Promise.resolve(3);
// throw new error
const promise2 = 42; // resolve
const promise3 = Promise.resolve("Random String");

Promise.all([promise1, promise2, promise3])
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("execution done");
  });

Promise.myAll = (promises) => {
  return new Promise((resolve, reject) => {
    let results = [];
    let remaining = promises.length;

    if (remaining === 0) {
      return resolve(results);
    }

    for (let i = 0; i < promises.length; i++) {
      //   Promise.resolve(promises[i]).then(
      //     (data) => {
      //       results[i] = data;
      //       remaining--;
      //       if (remaining === 0) {
      //         return resolve(results);
      //       }
      //     },
      //     (error) => {
      //       reject(error);
      //     }
      //   );
      Promise.resolve(promises[i])
        .then((data) => {
          results[i] = data;
          remaining--;
          if (remaining === 0) {
            return resolve(results);
          }
        })
        .catch((error) => {
          reject(error);
        });
    }
  });
};

Promise.myAll([promise1, promise2, promise3])
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("execution done");
  });
