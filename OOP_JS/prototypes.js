const Car = function(make, speed){
    this.make = make;
    this.speed = speed;
    this.speedup=function(){
        console.log('speed up')
    }
}

Car.prototype.accelerate = function(){
    this.speed +=10;
    console.log(this.speed)
}
Car.prototype.break =function(){
    this.speed-=5;
    console.log(this.speed)
}

let car1 = new Car('BMW', 120);
let car2 = new Car('Mercedes',95);
let car3 = new Car('honda', 20);

car1.accelerate();
car1.break();
car2.break();

