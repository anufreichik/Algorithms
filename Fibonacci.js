//iterative solution
//linear time complexity
function fib(n) {
    const res = [0, 1];
    for (let i = 2; i <= n; i++) {
        res.push(res[i - 2] + res[i - 1])
    }
    return res[n];
}

function memoize(fn){
    const cache={}
    return function(...args){
        if(cache[args]){
            return cache[args];
        }

        const result = fn.apply(this, args);
        cache[args] = result;
        return result;
    }
}
//recursive solution
//exponential time complexity
function slowFib(n) {

    if(n<2) return n;

    return fib(n-1) + fib(n-2);
}

const fib = memoize(slowFib)
