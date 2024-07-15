const PENDING = "pending";
const RESOVLED = "resolved";
const REJECTED = "rejected";

// then catch you guys will enhance with finally
function customPromise(excutorFn) {
  // properties
  let state = PENDING;
  let result = undefined;
  let sucessCallbacks = [];
  let failureCallbacks = [];

  const resolve = (value) => {
    if (state === PENDING && state !== REJECTED) {
      state = RESOVLED;
      result = value;
      sucessCallbacks.forEach((callbacks) => callbacks(result));
      // finallycallbacks
    }
  };

  const reject = (error) => {
    if (state === PENDING && state !== RESOVLED) {
      state = REJECTED;
      result = error;
      failureCallbacks.forEach((callbacks) => callbacks(result));
      // finallycallbacks
    }
  };

  this.then = (onSucess) => {
    if (state === RESOVLED) {
      onSucess(result);
    } else {
      sucessCallbacks.push(onSucess);
    }
  };
  this.catch = (onFailure) => {
    if (state == REJECTED) {
      onFailure(result);
    } else {
      failureCallbacks.push(onFailure);
    }
  };

  //   this.finally = (cb) => {

  //   }

  excutorFn(resolve, reject);
}

const myPromise = new customPromise((resolve, reject) => {
  setTimeout(() => {
    const value = "Hey Then";
    resolve(value);
  }, 1000);
});

myPromise.then((data) => {
  console.log(data);
});
myPromise.then((data) => {
  console.log(data);
});
myPromise.then((data) => {
  console.log(data);
});
myPromise.then((data) => {
  console.log(data);
});
myPromise.catch((err) => {
  console.log(err);
});
myPromise.catch((err) => {
  console.log(err);
});
myPromise.catch((err) => {
  console.log(err);
});
