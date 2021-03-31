const Animal = function(options){
    this.name = options.name;
    this.color = options.color;
    this.voice=function(){
        console.log('Base voice from ', this.name)
    }
}
Animal.prototype.voiceFromProto = function(){
    console.log('Base voice from ', this.name)
}
const dog = new Animal({name:'Rex', color:'White'})
dog.voice();
dog.voiceFromProto();
//esli mi zadaem method from prototype we can change it


//WITOUT NEW

const Cat = function(options){
    Animal.apply(this, arguments)
    this.hasTail = options.hasTail;
    this.type='cat';
}

Cat.prototype = Object.create(Animal.prototype)
Cat.prototype.constructor = Cat;


Animal.prototype.voice=function(){
    console.log('This is sound  goes from:', this.name)
}

Cat.prototype.voiceFromProto = function(){
    Animal.prototype.voice.apply(this, arguments)
    console.log( this.name, 'says myau')
}


const cat = new Cat({name:'Barsik', color:'black', hasTail:true});
log(cat)



