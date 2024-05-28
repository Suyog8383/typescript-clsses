class Vehicle {
  //   color: string;
  //   constructor(color: string) {
  //     this.color = color;
  //   }
  constructor(public color: string) {}

  protected drive(): void {
    console.log("@SN drive");
  }
}

// class Car extends Vehicle {
//   private honk(): void {
//     console.log("@SN boom");
//   }
//   startDriving(): void {
//     this.honk();
//   }
// }

const vehicle = new Vehicle("red");
console.log(vehicle.color);
// vehicle.drive();
// vehicle.honk();

// const car = new Car();
// car.drive();
// car.startDriving();
