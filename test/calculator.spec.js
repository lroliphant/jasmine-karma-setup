const calculator = require('../js/calculator');

describe('Some calculator', () => {
  it('is a function', () => {
    expect(calculator).toEqual(jasmine.any(Function));
  });

  it('returns 0 if the input is an empty string', () => {
    expect(calculator('')).toEqual(0);
  });

  it('adds 2 numbers', () => {
    expect(calculator('1+2')).toEqual(3);
  });

  it('correctly adds 2 numbers', () => {
    expect(calculator('2+2')).toEqual(4);
  });

  it('correctly adds more than 2 numbers', () => {
    expect(calculator('2+2+3+4')).toEqual(11);
  });

  it('correctly subtracts 2 numbers', () => {
    expect(calculator('5-2')).toEqual(3);
  });
});
