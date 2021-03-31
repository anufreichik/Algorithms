Object.prototype.print=function (){
    console.log('im object', this)
}

class Cat {
    constructor(options) {
        this.name=options.name;
    }
}

Cat.print();


Array.prototype.mapAndLog=function(){
    console.log('Array to map',this)
    return this.map.apply(this, arguments)
}

console.log([1,2,3,4].mapAndLog(el=>el+1))

String.prototype.toTag = function(tagName){
    return `<${tagName}>${this}</${tagName}>`
}

console.log('eminem'.toTag('strong'));//<strong>eminem</strong>


Number.prototype.toBigInt=function (){
    return BigInt(this)
}

const num = 42;
console.log(num.toBigInt())
