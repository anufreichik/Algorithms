function Cat(color, name){
    this.color = color
    this.name = name
}

const cat = new Cat('balck','kot')

console.log(cat);// Cat{color:'black', name:'cat'}

function myNew(constructor,...args){
    const obj={}
    Object.setPrototypeOf(obj, constructor.prototype);
    return constructor.apply(obj, args)||obj
}

const customCat = myNew(Cat, 'black', 'KOT');
console.log(customCat)//Cat{color:'black', name:'KOT'}


