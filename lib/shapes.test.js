const { Circle, Triangle, Square } = require('./shapes');

describe('Shape Classes', () => {
  describe('Circle', () => {
    test('should generate correct SVG for Circle', () => {
      const circle = new Circle('green');
      const svg = circle.render('ABC', 'white');
      expect(svg).toContain('<circle');
      expect(svg).toContain('fill="green"');
      expect(svg).toContain('ABC');
    });
  });

  describe('Triangle', () => {
    test('should generate correct SVG for Triangle', () => {
      const triangle = new Triangle('blue');
      const svg = triangle.render('XYZ', 'black');
      expect(svg).toContain('<polygon');
      expect(svg).toContain('fill="blue"');
      expect(svg).toContain('XYZ');
    });
  });

  describe('Square', () => {
    test('should generate correct SVG for Square', () => {
      const square = new Square('red');
      const svg = square.render('123', 'yellow');
      expect(svg).toContain('<rect');
      expect(svg).toContain('fill="red"');
      expect(svg).toContain('123');
    });
  });
});
