function math(operation, x){
    const OPERATIONS={
        '*':(a,b)=>a*b,
        '/':(a,b)=>a/b,
        '+':(a,b)=>a+b,
        '-':(a,b)=>a-b,

    }

    return function(y){
        console.log(x)
        return OPERATIONS[operation](x,y);
    }
}


const mul = math("*",5)

const add = math("+", mul(2));

console.log(typeof add);
console.log(add(math("-",25)(20)))

//returns 15


// function foo(x,y){
//   return x+y
// }

// console.log(foo("!!")==="!!undefined")

// console.log(foo("5","10")==510)

// console.log(foo(5)===5)
