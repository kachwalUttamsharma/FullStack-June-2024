const p1 = Promise.reject(42);
const p2 = new Promise((resolve, reject) => {
    reject(43);
});
const p3 = new Promise((resolve, reject) => {
    setTimeout(() => reject(44), 1000);
});


Promise.myAny = function(promises) {
    return new Promise((resolve, reject) => {
        const rejectedResults = {message : "All promises were rejected", errors : []};
        let remaining = promises.length;
        
        for(let i = 0; i < promises.length; i++) {
            Promise.resolve(promises[i])
                .then(data => {
                    resolve(data);
                })
                .catch(err => {
                    rejectedResults.errors[i] = err;
                    remaining--;
                    if(remaining === 0) {
                        reject(rejectedResults);
                    }
                })
        }
    })
}

// Promise.any([p1, p2, p3])
//     .then(data => {
//         console.log(data);
//     })
//     .catch(reason => {
//         console.log(reason);
//     });

Promise.myAny([p1, p2, p3])
    .then(data => {
        console.log(data);
    })
    .catch(reason => {
        console.log(reason);
    });
