/*
    A promise is a placeholder for a value that may be provided later as the result of some asynchronous
    operation. Instead of assigning an event handler or passing a callback into a function, you can use a
    promise to represent the result of an operation.
*/
const fs = require("fs");
const promise1 = fs.promises.readFile("./colors.json");

/*
    The Promise Lifecycle:
        Promise States: 
            Pending: Initial state, neither fulfilled nor rejected.
            Fulfilled: Operation completed successfully.
            Rejected: Operation failed.
        Handlers:
            .then(onFulfilled, onRejected): Attaches fulfillment and rejection handlers.
            .catch(onRejected): Attaches rejection handler.
            .finally(onFinally): Attaches handler for completion, regardless of outcome.
*/
const onFulfilled = (data) => {
    console.log("Data loaded successfully");
    console.log(JSON.parse(data.toString()));
}

const onRejected = (err) => {
    console.log("Rejected with error");
    throw new Error(err); 
}

// Adding both Fulfillment and Rejection handlers
promise1.then(onFulfilled, onRejected);

// Adding only Fulfillment handler
promise1.then(onFulfilled);

// Adding only Rejection handler
promise1.then(null, onRejected);

// Promises also have a catch() method that behaves the same as then() when only a rejection handler is passed.

// Rejection handler with catch method
promise1.catch(onRejected);

/*
    Just know that if you don't attach a rejection handler to a promise that is rejected, 
    then the JavaScript runtime will output a message to the console, or throw an error,
    or both (depending on the runtime).
*/

// The callback passed to finally() is "called" regardless of success or failure.

const callback = () => {
    // no way to know if fulfilled or rejected
    console.log("Settled");
}
promise1.finally(callback);

promise1.then(callback, callback); // It is same as finally, callback executes regardless of success or failure.

/*
    1) All promise handlers, whether fulfillment, rejection, or settlement, are executed as microtasks inside
    of the JavaScript engine. 
    2) Microtasks are queued and then executed immediately after the currently running task has completed, 
    before the JavaScript runtime becomes idle.
    3) Priority of microtasks is more than callbacks
*/
promise1.then(() => console.log("==========================="));
/*
    Till now we have discussed Settled Promises, now let's create Unsettled promises.

    1) New promises are created using the Promise constructor. This constructor accepts a single argument:
    a function called the executor, which contains the code to initialize the promise. 
    2) The executor is passed two functions named resolve() and reject() as arguments. 
    3) You call the resolve() function when the executor has finished successfully to signal that the promise is resolved 
    or the reject() function to indicate that the operation has failed.
*/

function requestData(file) {
    function executer(resolve, reject) {
        console.log("Reading the data from the file...");
        fs.readFile(file, (err, data) => {
            if(err) reject(err);
            else resolve(data);
        })
    }
    return new Promise(executer); // new promise using constructor
}
const promise2 = requestData("./colors.json");

promise2
    .then((data) => {
        console.log("Data loaded successfully");
        console.log(JSON.parse(data.toString()));
    })
    .catch((err) => {
        console.log("Rejected with error");
        throw new Error(err); 
    });

/*
    One important aspect of executors is that they run immediately upon creation of the promise. In the
    previous example, we can see that, "Reading the data from the file..." is coming before. 
*/
// For example, the order of output for below code is
const promise3 = new Promise((resolve, reject) => {
    console.log("Hii from executor function"); // 1
    resolve("Resolved"); // 3
});

promise3.then(res => console.log(res));
console.log("After"); // 2

/*
    If an error is thrown inside an executor, then the promise's rejection handler is called.
    For example:
*/
const promise4 = new Promise((resolve, reject) => {
    throw new Error("Display error message");
})

promise4.catch(err => console.log(err));
/*
    In this code, the executor intentionally throws an error. There is an implicit try-catch
    inside every executor so that the error is caught and then passed to the rejection
    handler. The previous example is equivalent to:
*/

const promise5 = new Promise((resolve, reject) => {
    try {
        throw new Error("Display error message");
    }
    catch(err) {
        reject(err);
    }
});
promise5.catch(err => console.log(err));


/*
    The Promise constructor is the best way to create unsettled promises due to the dynamic nature of 
    what the promise executor does. But if you want a promise to represent a previously computed value, 
    then it doesn't make sense to create an executor that simply passes a value to the resolve() or reject() function. 
    Instead, there are two methods that create settled promises given a specific value.

    1) Promise.resolve()
    2) Promise.reject()
*/

// Using Promise.resolve()
const promise6 = Promise.resolve("Success");
promise6.then(data => console.log(data));

// Using Promise.reject()
const promise7 = Promise.reject("Failure");
promise7.catch(err => console.log(err));


/*
    If you pass a promise to Promise.resolve(), then the function returns the same promise that you passed in. 
    For example:
*/

const promise8 = Promise.resolve(promise6); // same goes with promise7
promise8.then(data => console.log(data));

promise6.then(() => console.log(promise6 === promise8)); // true


/*
    Non-Promise Thenables
    Let's say there's an object which has then method
*/

const thenable1 = {
    then : (resolve,  reject) => {
        resolve("Success");
    }
};

/*
    Both Promise.resolve() and Promise.reject() accept non-promise thenables
    as arguments. When passed a non-promise thenable, these methods create a new
    promise that is called after the then() function.
*/

const promise9 = Promise.resolve(thenable1);
promise9.then(data => console.log(data));

/*
    The same process can be used with Promise.resolve() to create a rejected promise from a thenable.
*/

const thenable2 = {
    then : (resolve, reject) => {
        reject("Failure");
    }
};

const promise10 = Promise.resolve(thenable2);
promise10.catch(err => console.log(err));