const Car = {
    speed: 10,
    accelerate: function() {
       this.speed+=10;
    },
    deaccelerate:function(){
        this.speed=-10;
    }
};

const Car1 = Object.create(Car);
const Car2 = Object.create(Car);
Car1.speed=30;
Car2.speed = 60;
Car1.accelerate()
Car2.deaccelerate()




