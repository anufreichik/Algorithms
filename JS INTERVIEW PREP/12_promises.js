console.log('Request Data...')

//vlozhennost method
// setTimeout(()=>{
//
//     console.log('Preparing data...');
//     const backendData={
//         server:'AWS',
//         port:2000,
//         status:'working'
//     }
//     setTimeout(()=>{
//         backendData.modified=true;
//         console.log('Data' +
//             ' Received', backendData)
//     },2000)
// },2000)


//promises
const p = new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log('Preparing data...');
        const backendData = {
            server: 'AWS',
            port: 2000,
            status: 'working'
        }
        resolve(backendData)
    }, 2000)
})


p.then((data) => {
    //OPTION 1
    // console.log('Promise Resolved.', data)
    // const p2 = new Promise((resolve, reject)=>{
    //     setTimeout(()=>{
    //         data.modified=true;
    //         resolve(data)
    //     },2000)
    //
    // })
    // p2.then(clientData=>{
    //     console.log('Data Receivved', clientData)
    // })

    //OPTION 2
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            data.modified = true;
            resolve(data) //or reject(data);
        }, 2000)
    })
    })
    .then(clientData => {
        console.log('Data Received', clientData);
        clientData.fromPromise = true
        return clientData
    }).then(data =>{
    console.log('Modified', data)
    })
    .catch(err=>{
        console.log('Error', err)
    })
    .finally(()=>{
        console.log('Finally')
    })



const sleep=(ms)=> {
    return new Promise(resolve => {
        setTimeout(() => resolve(), ms)
    })
}

sleep(2000).then(()=>console.log('After 2 sec'));


Promise.all([sleep(2000), sleep(5000)])
    .then(()=>{
        console.log('All promises...')
    })


Promise.race([sleep(2000), sleep(5000)])
    .then(()=>{
        console.log('Race promises...')
    })
