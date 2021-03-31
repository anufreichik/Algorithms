function groupBy(array, iteratee){
    let result={}
    if(typeof iteratee==='string' && iteratee==='length'){


        for(let el  of array){
            if(result.hasOwnProperty(el.length)){
                result[el.length].push(el);
            }
            else{
                result[el.length] = [el];
            }

        }
        console.log(result) ;
    }
    if(typeof iteratee==='function'){
        for(let el  of array){
            if(result.hasOwnProperty(iteratee(el))){
                result[iteratee(el)].push(el);
            }
            else{
                result[iteratee(el)] = [el];
            }

        }
        console.log(result) ;
    }
}



function groupBy1(array, iteratee){
    let resutl={}
    array.forEach(item=>{
        let key;
        if(typeof iteratee==='string'){
            key=item[iteratee];
            console.log(key)
        }
    })
}
groupBy1(['abc', 'ade', 'xy','ab', 'qwerty'], 'length')

groupBy(['abc', 'ade', 'xy', 'qwerty'], (s)=>s.charAt(0))
groupBy(['abc', 'ade', 'xy','ab', 'qwerty'], 'length')



