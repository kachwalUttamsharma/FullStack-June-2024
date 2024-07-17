const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("I'm from p1");
    }, 2000);
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Im from p2");
    }, 1000);
})

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("I'm from p3");
    }, 500);
});

Promise.myRace = function(promises) {
    return new Promise((resolve, reject) => {
        for(let i = 0; i < promises.length; i++) {
            Promise.resolve(promises[i])
                .then(data => {
                    resolve(data);
                })
                .catch(err => {
                    reject(err);
                })
        }
    })
}

// Promise.race([p1, p2, p3])
//     .then(data => {
//         console.log(data);
//     })
//     .catch(err => {
//         console.log(err);
//     });

Promise.myRace([p1, p2, p3])
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    });