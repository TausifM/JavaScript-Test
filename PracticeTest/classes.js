// class declarations
class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  print() {
    console.log(`${this.make}, ${this.model}, ${this.year}`);
  }
}
let myCar = new Car("bmw", "745li", 2010);
myCar.print();
// expression
// let car = class {};
class SportCar extends Car {
  revEngine() {
    console.log("Vrrrooom goes the " + this.make);
  }
}
let mySportCar = new SportCar("dodge", "viper", 2011);
mySportCar.print();
mySportCar.revEngine();
// myCar.revEngine();
