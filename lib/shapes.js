class Shape {
    constructor(color) {
      this.color = color;
    }
  
    setColor(color) {
      this.color = color;
    }
  
    // Common method to set color, can be expanded for other properties
  }
  
  class Circle extends Shape {
    constructor(color) {
      super(color);
    }
  
    render(text, textColor) {
      // Example SVG string for Circle
      return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                <circle cx="150" cy="100" r="80" fill="${this.color}" />
                <text x="150" y="105" font-family="Verdana" font-size="35" 
                      fill="${textColor}" text-anchor="middle">${text}</text>
              </svg>`;
    }
  }
  
  class Triangle extends Shape {
    constructor(color) {
      super(color);
    }
  
    render(text, textColor) {
      // Example SVG string for Triangle
      return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                <polygon points="150,50 250,150 50,150" fill="${this.color}" />
                <text x="150" y="105" font-family="Verdana" font-size="35" 
                      fill="${textColor}" text-anchor="middle">${text}</text>
              </svg>`;
    }
  }
  
  class Square extends Shape {
    constructor(color) {
      super(color);
    }
  
    render(text, textColor) {
      // Examp
  