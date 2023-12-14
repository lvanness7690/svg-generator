const { Circle, Triangle, Square } = require('./shapes');

describe('Shape Classes', () => {
  test('Circle render method', () => {
    const circle = new Circle('green');
    expect(circle.render('SVG', 'white')).toContain('circle');
  });

  // Add more tests for Triangle and Square
});
