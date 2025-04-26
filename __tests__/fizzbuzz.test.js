const fizzBuzz = require('../src/fizzbuzz');

describe('FizzBuzz Kata', () => {
  test('Devuelve "Fizz" para múltiplos de 3', () => {
    expect(fizzBuzz(3)).toBe('Fizz');
  });

  test('Devuelve "Buzz" para múltiplos de 5', () => {
    expect(fizzBuzz(5)).toBe('Buzz');
  });

  test('Devuelve "FizzBuzz" para múltiplos de 3 y 5', () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz');
  });

  test('Devuelve el número si no es múltiplo de 3 ni 5', () => {
    expect(fizzBuzz(7)).toBe('7');
  });
});
