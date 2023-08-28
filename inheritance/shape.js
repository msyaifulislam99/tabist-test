// Abstract base class
class Shape {
  constructor() {
    if (new.target === Shape) {
      throw new Error('Shape is an abstract class and cannot be instantiated directly.');
    }
  }

  // Abstract method
  calculateArea() {
    throw new Error('calculateArea() method must be implemented in subclasses.');
  }
}

// Subclass Circle
class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  calculateArea() {
    return Math.PI * this.radius ** 2;
  }
}

// Subclass Rectangle
class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  calculateArea() {
    return this.width * this.height;
  }
}

module.exports = {
  Shape,
  Circle,
  Rectangle,
};
