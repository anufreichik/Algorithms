class Animal{
    constructor(options) {
        this.name = options.name
        this.color = options.color
    }

    voice(){
        console.log('This voice from ', this.name)
    }
}

const dog = new Animal({name:'Rex', color:'White'});


class Cat extends Animal{
    constructor(options) {
       super(options)
        this.hasTail = options.hasTail
        this.type='cat'

    }

    voice(){
        super.voice()
        console.log(this.name,' says myau')
    }
}

const cat = new Cat({name:'Murzik', color:'Black', hasTail:true})
