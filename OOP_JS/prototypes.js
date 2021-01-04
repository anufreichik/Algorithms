const Car = function(make, speed){
    this.make = make;
    this.speed = speed;

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

car1.accelerate();
car1.break();
car2.break();
