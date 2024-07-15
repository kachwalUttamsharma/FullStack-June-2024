/*
    Each call to then(), catch(), or finally() actually creates and returns another
    promise. This second promise is settled only once the first has been fulfilled or
    rejected. 
    
    Consider this example:
*/

const promise = Promise.resolve("Successfully");

promise
    .then(val => {
        console.log(val);
    })
    .then(() => {
        console.log("Completed!");
    });

/*
    The call to promise.then() returns a second promise on which then() is called. The
    second then() fulfillment handler is only called after the first promise has been
    resolved. If you unchain this example, it looks like this:
*/

const promise1 = Promise.resolve("Successfully");

const promise2 = promise1.then(val => {
    console.log(val);
});

promise2.then(() => {
    console.log("Completed!");
});

/*
    In this unchained version of the code, the result of promise1.then() is stored in
    promise2, and then promise2.then() is called to add the final fulfillment handler.
    The call to promise2.then() also returns a promise. This example just doesn't use
    that promise.
*/

/*
    Catching Errors:
    Promise chaining allows you to catch errors that may occur in a fulfillment or
    rejection handler from a previous promise. For example:
*/

const promise3 = Promise.resolve(42);

promise3
    .then(val => {
        throw new Error("Oops!");
    })
    .catch(err => {
        console.log(err);
    });

/*
    In this code, the fulfillment handler for promise throws an error. The chained call
    to the catch() method, which is on a second promise, is able to receive that error
    through its rejection handler. The same is true if a rejection handler throws an error:
*/

const promise4 = new Promise((resolve, reject) => {
    throw new Error("Uh oh!");
});

promise4
    .catch(err => {
        console.log(err); // Uh oh!
        throw new Error("Oops!");
    })
    .catch(err => {
        console.log(err); // Oops!
    });

/*
    Here, the executor throws an error that triggers the promise's rejection handler. That
    handler then throws another error that is caught by the second promise's rejection
    handler. The chained promise calls are aware of errors in other promises in the chain.
    You can use this ability to catch errors through a promise chain to effectively act like
    a try-catch statement.

    Consider using fetch() to retrieve some data and wanting to catch any errors that occur:
*/

const promise5 = fetch("https://mocki.io/v1/202e3912-e1db-4c57-9068-a8d78e0ece24");

promise5
    .then(response => {
        console.log(response.status);
    })
    .catch(err => {
        console.log(err.message);
    });

/*
    This example will output the response status from the fetch() call if it succeeds
    and will output the error message if the call fails. You can take this a step further
    and handle status codes outside of the 200-299 range as errors by checking the
    response.ok property and throwing an error if it is false, as in this example:
*/

promise5
    .then(response => {
        if(response.ok) {
            console.log(response.status);
        }
        else {
            throw new Error(`Unexpected status code: ${response.status} ${response.statusText}`);
        }
    })
    .catch(err => {
        console.log(err.message);
    });

/*
    The chained catch() call in this example creates a rejection handler that catches both
    errors returned by fetch() and also any errors thrown in the fulfillment handler. So
    instead of needing two different handles for catching the two different types of errors,
    you can use one to handle all of the errors that may occur in the chain.

    Note: Always have a rejection handler at the end of a promise chain to ensure that you can
    properly handle any errors that may occur.
*/

/*
    Using finally() in Promise Chains:

    The finally() method behaves differently than either then() or catch() in that it
    copies the state and value of the previous promise into its returned promise. That
    means if the original promise is fulfilled with a value, then finally() returns a
    promise that is fulfilled with the same value. For example:
*/

const promise6 = Promise.resolve(24);

promise6
    .finally(() => {
        console.log("Finally called");
    })
    .then(value => {
        console.log(value); // 24
    });

/*
    Here, the settlement handler can't receive the fulfilled value from promise.
    That value is copied to a new promise that is returned from the method call. The new
    promise is fulfilled with the value 24 (copied from promise) so the fulfillment handler
    receives 24 as an argument. 
    
    Keep in mind that even though the returned promise and promise have the same value, 
    they are not the same object, as you can see in this example:
*/

const promise7 = promise6.finally(() => {
    console.log("Finally called");
});

promise7.then(value => {
    console.log(value); // 24
});

promise6.then(() => console.log(promise6 === promise7)); // false

/*
    In this code, the returned value from promise6.finally() is stored in promise7, at
    which point you can determine that it is not the same object as promise6. The call to
    finally() always copies the state and value from the original promise. 
    
    That also means that when finally() is called on a rejected promise, it in turn returns a
    rejected promise, as in this example:
*/

const promise8 = Promise.reject("Failure");

promise8
    .finally(() => {
        console.log("Finally called");
    })
    .catch(err => {
        console.log(err); // Failure
    });

/*
    The promise in this example is rejected with "Failure", Once again,
    the settlement handler cannot access this information as it is not passed in as an
    argument, so instead it returns a new promise that is rejected for the same error.
    You can then use catch() to retrieve the error.

    The one exception to how finally() works is when an error is thrown inside of the
    settlement handler or a rejected promise is returned. In this one case, the returned
    promise from finally() does not maintain the state and value from the original
    promise, and instead is rejected with the thrown error as the reason. 

    Here's an example:
*/

promise8
    .finally(() => {
        throw new Error("Failure2");
        // (same as) return Promise.reject("Failure2") 
    })
    .catch(err => {
        console.log(err); // Failure2
    });

/*
    Because the settlement handlers throw "Failure2" or return Promise.reject("Failure2") in this
    example, the returned promise is rejected with the value of "Failure2" and that is output
    to the console instead of "Failure1". The state and value of the original promise are lost as a
    consequence of the error being thrown in the settlement handler.
*/

/*
    Another important aspect of promise chains is the ability to pass data from one
    promise to the next. You've already seen that a value passed to the resolve() handler
    inside an executor is passed to the fulfillment handler for that promise. You can
    continue passing data along a chain by specifying a return value from the fulfillment
    handler. For example:
*/

const promise9 = Promise.resolve(1);

promise9
    .then(value => {
        console.log(value); // 1
        return value + 1;
    })
    .then(value => {
        console.log(value); // 2
    });

/*
    The fulfillment handler for promise returns value + 1 when executed. Since value is
    1 (from the executor), the fulfillment handler returns 2. That value is then passed
    to the fulfillment handler of the second promise, which outputs it to the console.
    You could do the same thing with the rejection handler. When a rejection handler is
    called, it may return a value. If it does, that value is used to fulfill the next promise
    in the chain, like this:
*/

const promise10 = Promise.reject(1);

promise10
    .catch(err => {
        // rejection handler
        console.log(err); // 1
        return err + 1;
    })
    .then(value => {
        // fulfillment handler
        console.log(value); // 2
    });

/*
    Here, a rejected promise is created with a value of 1. That value is passed into the
    rejection handler for the promise, where value + 1 is returned. Even though this
    return value is coming from a rejection handler, it is still used in the fulfillment
    handler of the next promise in the chain. The failure of one promise can allow
    recovery of the entire chain if necessary.
*/

/*
    Using finally(), however, results in a different behavior. Any value returned from
    a settlement handler is ignored so that you can access the original promise's value.
    Here's an example:
*/

const promise11 = Promise.resolve(42);

promise11
    .finally(() => {
        console.log("Finally called");
        return 43; // ignored
    })
    .then(value => {
        console.log(value); // 42
    });

/*
    The value passed to the fulfillment handler is 42 and not 43. The return statement
    in the settlement handler is ignored so that the original value can be retrieved using
    then(). This is one of the consequences of finally() returning a promise whose
    state and value are copied from the original.
*/

/*
    Returning Promises in Promise Chains:

    Returning primitive values from promise handlers allows passing of data between
    promises, but what if you return an object? 
*/

const promise12 = Promise.resolve(42);
const promise13 = Promise.resolve(43);

promise12
    .then(value => {
        console.log(value); // 42
        return promise13;
    })
    .then(value => {
        console.log(value); // 43
    });

/*
    In this code, promise12 resolves to 42. The fulfillment handler for promise12 returns
    promise13, a promise already in the resolved state. The second fulfillment handler
    is called because promise13 has been fulfilled. If promise13 were rejected, a rejection
    handler (if present) would be called instead of the second fulfillment handler.

    The important thing to recognize about this pattern is that the second fulfillment
    handler is not added to promise13, but rather to a third promise, making the previous
    example equivalent to this:
*/

const promise14 = promise12.then(value => {
    console.log(value);
    return promise13;
});

promise14.then(value => {
    console.log(value);
})

/*
    Here, it's clear that the second fulfillment handler is attached to promise14 rather than
    promise13. This is a subtle but important distinction, as the second fulfillment handler
    will not be called if promise13 is rejected.
*/

// Another example:
const fs = require("fs");
fs.promises.readFile("./f1.txt")
    .then(data1 => {
        console.log("data from f1 ==>", data1.toString());
        return fs.promises.readFile("./f2.txt").then(data2 => [data1, data2]);
    })
    .then(([data1, data2]) => {
        console.log("data from f1 and f2 ==>", data1.toString(), "|", data2.toString());
        return fs.promises.readFile("./f3.txt").then(data3 => [data1, data2, data3]);
    })
    .then(([data1, data2, data3]) => {
        console.log("data from f1, f2 and f3 ==>", data1.toString(), "|", data2.toString(), "|", data3.toString());
    })
    .catch(err => console.log(err));



/*
    Returning a promise from a settlement handler using finally() also exhibits some
    different behavior than using then() or catch(). First, if you return a fulfilled
    promise from a settlement handler, then that promise is ignored in favor of the value
    from the original promise, as in this example:
*/
const promise15 = Promise.resolve(25);

promise15
    .finally(() => {
        return Promise.resolve(26); // ignored
    })
    .then(value => {
        console.log(value); // 25
    });

/*
    In this example, the settlement handler returns a promise that is fulfilled with 26, but
    the returned promise is fulfilled with the original promise's value, which is 25.

    However, if you return a rejected promise from a settlement handler, then the
    returned promise adopts that rejected value and the returned promise is rejected, like this:
*/

promise15
    .finally(() => {
        return Promise.reject(26); 
    })
    .catch(err => {
        console.log(err); // 26
    })


// This holds true even if the original promise is rejected, as in this example:

const promise16 = Promise.reject(25);

promise16
    .finally(() => {
        return Promise.reject(26);
    })
    .catch(err => {
        console.log(err); // 26
    })


/*
    Returning a rejected promise from a settlement handler is functionally equivalent to
    throwing an error: the returned promise is rejected with the specified error.
*/