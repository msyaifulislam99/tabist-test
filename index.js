const { Circle, Rectangle } = require('./inheritance/shape');

// Create instances
const circle = new Circle(5);
const rectangle = new Rectangle(4, 6);

// Calculate and display areas
console.log(`Circle area: ${circle.calculateArea()}`);
console.log(`Rectangle area: ${rectangle.calculateArea()}`);
