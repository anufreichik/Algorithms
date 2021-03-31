//context define how function called and based on this
const person={
    surname:'Stark',
    knows:function(what, name){
        console.log(`You ${what} know, ${name} ${this.surname}`)
    }
}

const  john={surname:'Snow'}
person.knows('all', 'Brian');
//you all know, Brian Stark

//CALL - call funciton right away
person.knows.call(john, 'nothing', 'John')
//You nothing know, John Snow

//APPLY only two parameters(second params array)
person.knows.apply(john, ['nothing', 'John'])
person.knows.call(john, ...['nothing', 'John'])

//BIND - returns new function
const bound = person.knows.bind(john, 'nothing', 'John');
bound();

//NEW
function Person(name, age){
    this.name = name
    this.age = age
    console.log(this)
}

const elena = new Person('Elena', 20)

//explicit binding(yavnii)
function logThis(){
    console.log(this)
}
const obj = {num:42}
logThis.apply(obj)
logThis.call(obj);
logThis.bind(obj)();
//{num:42}
//{num:42}
//{num:42}

//implicit binding(ne yavnii)
const animal={
    legs:4,
    logThis:function(){
        //this would be context of animal
        console.log(this)
    }
}
animal.logThis()
//{legs:4, logThis:function[Function:logThis]}

//ARROW functions and context
//arrow function not creating own context
function Cat(color){
    this.color = color;
    console.log('This',this);
    (()=>console.log('Arrow this', this))()
}


new Cat('red')
//This Cat{color:'red'}
//Arrow this Cat{color:'red'}

function hello(){
    console.log('hello', this)
}
const person={
    name:'marina',
    sayHello:hello,
    sayHelloWindow:hello.bind(window),//binding context to window,
    logInfo:function(job, phone){
        console.group(`${this.name} info:`)
        console.log(`Name is ${this.name}`)
        console.log(`Job is ${job}`)
        console.log(`Phone is ${phone}`)
        console.groupEnd();
    }
}

const lena={
    name:'elelna',
    age:22
}

person.logInfo.bind(lena)();

person.logInfo.bind(lena,'FrontEnd', '1232343435' )(); //bind return function and not calling it right away

person.logInfo.call(lena, 'FrontEnd', '1232343435');//call function immediatly

person.logInfo.apply(lena, ['FrontEnd', '1232343435']);//only can be 2 params, second param is array
window.hello();//context this will be window
person.sayHello()//context will be person




/////======================================CONTEXT and PROTOTYPES

const array=[1,2,3,4,5]

function multBy(arr, n){
    return arr.map(el=>el*n)
}

console.log(multBy(array, 5));

//how to make that array has this function MultFive custom
Array.prototype.multBy = function(n){
    console.log('multBy', this)//
   return  this.map(el=>el*n)
}

log(array.multBy(5))

