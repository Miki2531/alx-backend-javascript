export default class Car {
  constructor(brand, motor, color) {
    this._bran = brand;
    this.motor = motor;
    this.color = color;
  }

  static get [Symbol.specie]() {
    return this;
  }

  cloneCar() {
    return new this.constructor[Symbol.specie]();
  }
}
