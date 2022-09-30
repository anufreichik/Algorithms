const promise1 = Promise.resolve(1);
const promise2 = Promise.resolve(2);
const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(10)
    }, 10)
})
Promise.all([promise1, promise2, promise3])
    .then(values => console.log(values))
    .catch(err => console.log(err));//[1,2,10]


const promisesCombined = (promisesArr) => {
    return new Promise((resolve, reject) => {
        let resultsArr = []
        for (let currentPromise of promisesArr) {
            currentPromise
                .then(res => {
                    resultsArr.push(res)
                    if (resultsArr.length === promisesArr.length)
                        resolve(resultsArr);
                })
                .catch(err => {
                        reject(err)
                })

        }
    })
}

promisesCombined([promise1,promise2, promise3]).then(values=>console.log(values))


