class PersonCl{
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    }
    calcAge(){
        console.log(2037-this.birthYear)
    }
    get age(){
       return 2037-this.birthYear;
    }

    set fullName(name){
        if(name.includes(' ')) this._fullName = name;
        else alert(`${name} is not a full name!`)
    }

    get fullName(){
        return this._fullName;
    }


}

const jessica = new  PersonCl('Jessica', 1996)

class Car{
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }
    break(){
        this.speed-=5;
    }
    accelerate(){
        this.speed+=10;
    }
    get speedUS(){
        return this.speed/1.6;
    }
    set speedUS(usSpeed){
        this.speed = usSpeed*1.6;

    }
}

const newCar = new Car('BMW', 120);
newCar.speedUS=60;
let speed = newCar.speed;