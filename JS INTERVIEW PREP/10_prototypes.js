function Cat(color, name){
    this.color = color
    this.name = name
}

Cat.prototype.voice=function(){
    console.log(`Cat ${this.name} say myau`)
}


const cat = new Cat('Kot', 'White')
cat.voice()

console.log(Cat.prototype)//Cat {voice:[Function]}
console.log(cat)
console.log(cat.__proto__===Cat.prototype)
console.log(cat.constructor) //[Function: Cat]


function Person(){
    Person.prototype.legs=2;
    Person.prototype.skin='white'

}

const person = new Person()
person.name='Marina'

console.log('skin' in person) //true
console.log(person.legs) //2
console.log(person.eyes)//undefined

console.log(Object.hasOwnProperty('name'))//true
console.log(Object.hasOwnProperty('skin'))//false

//Object.create()

const objProto = {year:2019}
const myYear = Object.create(objProto,{})

console.log(myYear.year)//2019
objProto.year=2020;
console.log(myYear.year)//2020


console.log(myYear.hasOwnProperty('year'))//false
console.log(myYear.__proto__===objProto)//true




