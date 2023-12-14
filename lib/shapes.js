class Shape {
    constructor(color) {
      this.color = color;
    }
  
    setColor(color) {
      this.color = color;
    }
  }
  
  class Circle extends Shape {
    constructor(color) {
      super(color);
    }
  
    render(text, textColor) {
      // SVG generation logic for Circle
    }
  }
  
  class Triangle extends Shape {
    constructor(color) {
      super(color);
    }
  
    render(text, textColor) {
      // SVG generation logic for Triangle
    }
  }
  
  class Square extends Shape {
    constructor(color) {
      super(color);
    }
  
    render(text, textColor) {
      // SVG generation logic for Square
    }
  }
  
  module.exports = { Circle, Triangle, Square };
  