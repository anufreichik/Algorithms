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


