//1)implement function sum such way:
//sum(2,3)==sum(2)(3)==5
//SOLUTION1
function sum(a,b){
    if(b){
        return a+b
    }
    return function(c){
        return a+c;
    }
}
//SOLUTION2
function sum1(...args){
    if(args.length===2){
        return args[0]+args[1]
    }
    return function(c){
        return args[0]+c;
    }
}


console.log(sum(2,3))
console.log(sum(2)(3))

console.log(sum1(2,3))
console.log(sum1(2)(3))

//2) Implement bind2 analog bind in javascirpt
//const sum(x,y)=>x+y;
//const plusTen = sum.bind2(undefined, 10)
//plusTen(1)//11
//plusTen(10)//20

const person={
    firstName:'Max',
    logName(number, eee){
        console.log('Name: ', this.firstName, number)
    }
}
const person2={
    firstName:'Person 2'
}

person.logName(100)
//method bind
person.logName.bind(person2, 200, 'eee')()

//call, bind, apply  - prototypes of function

const sumBind=(x,y)=>x+y;

Function.prototype.bind2=function(context,...args){
    return (...args2)=>{
       return  this.apply(context,[...args, ...args2])
    }
}

const plusTen = sumBind.bind2(undefined, 10);
plusTen(1)
