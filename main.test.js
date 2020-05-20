const multiply = require('./main');

test('multiply 2 * 2 to equal 4', () => {
    expect(multiply(2, 2)).toBe(4);
  });