
const memoize = (fn)=>{
    const cache={}
    return function(...args){
        if(cache[args])
            return cache[args]
        const result = fn(...args);
        cache[args]=result;
        return result;
    }
}


const SlowFunc=(num)=>{
    for(let i=0;i<=num;i++){
        if(i===num){
            return i;
        }
    }
}

const fastFunction = memoize(SlowFunc);

fastFunction(20000000000000);








































