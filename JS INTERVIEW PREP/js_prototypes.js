const person = new Object({
    name:"max",
    age:23,
    greet:()=>{console.log('hello')}
})

Object.prototype.sayHello = function(){
    console.log('hello')
}

person.sayHello();

const lena = Object.create(person)

lena.greet();//'hello'
lena.name='Elena'

//PROTOTYPES is Object that other Objects have  and can be called from up down
//PROTOTYPE is OBJECT which help widen properties of objects or classes

const str = new String('i am string');
str.sayHello();




