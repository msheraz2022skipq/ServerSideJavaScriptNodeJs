function Engine(cylinders, size){
    this.cylinders = cylinders;
    this.size = size;
}

function Car(make, model, color, cylinders, size){
    this.make = make;
    this.model=model;
    this.color=color;
    //constructor here models the car with these details containing engine as object
    this.engine = new Engine(cylinders,size)
}

let sherazCar = new Car('Eagle','BMW','black', 4,2.2)
console.log(sherazCar)
sherazCar.year = 2022;
console.log(sherazCar)
sherazCar.year = 2021;
console.log(sherazCar)
