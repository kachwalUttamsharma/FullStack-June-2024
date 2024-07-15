const p1 = Promise.resolve(200);
const p2 = Promise.reject(404);
const p3 = new Promise((resolve, reject) => {
    try {
        setTimeout(() => {
            resolve(500);
        }, 100);
    }
    catch(err) {
        reject(err);
    } 
});

Promise.myAllSettled = (promises) => {
    return new Promise((resolve, reject) => {
        let results = [];
        let remaining = promises.length;

        if(remaining === 0) {
            resolve(results);
        }

        for(let i = 0; i < promises.length; i++) {
            Promise.resolve(promises[i])
                .then(data => {
                    results[i] = {status : "fulfilled", value : data};
                })
                .catch(err => {
                    results[i] = {status : "rejected", reason : err};
                })
                .finally(() => {
                    remaining--;
                    if(remaining === 0) {
                        resolve(results);
                    }
                })
        }
    });
};

// Promise.allSettled([p1, p2, p3])
//     .then(arr => {
//         console.log(arr);
//     });

Promise.myAllSettled([p1, p2, p3])
    .then(arr => {
        console.log(arr);
    });