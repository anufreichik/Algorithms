const promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve(res);
    }, 5000);
});


const promise1 = new Promise((resolve,reject)=>{
    resolve(res)
})


//Несколько промисов можно объединить и получить разом ответ от них
const promisesImages = [];
const count = 5;

for (let i = 0; i < count; i++) {
    promisesImages.push(new Promise((resolveImg, rejectImg) => {
        let img =  new Image(),
            startTime = Date.now();

        img.src = this.imgUrl + '?' + Math.floor(Math.random() * 100000000);

        img.onload = () => {
            resolveImg(Date.now() - startTime);
        };
        img.onerror = rejectImg;
    }));
}

Promise.all(promisesImages)
    .then((timings) => {console.log('result')})


//-----------------------------------------
//order of actions 1,3, 2
console.log(1);
setTimeout(function() {
    console.log(2);
}, 0)
console.log(3);
