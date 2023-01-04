import {
  capitalize, reverseString, calculator, caesarCipher,
} from './script';

test('Return a string with the first character capitalize', () => {
  expect(capitalize('hello world')).toBe('Hello world');
  expect(capitalize('HELLO WORLD')).toBe('HELLO WORLD');
  expect(capitalize('3 years ago')).toBe('3 years ago');
});

test('Return a string reversed', () => {
  expect(reverseString('hello world')).toBe('dlrow olleh');
  expect(reverseString('HELLO WORLD')).toBe('DLROW OLLEH');
  expect(reverseString(' 3 years ago ')).toBe(' oga sraey 3 ');
});

test('return the correct calculation of the sum function in calculator object', () => {
  expect(calculator.sum(2, 2)).toBe(4);
  expect(calculator.sum(0, 2)).toBe(2);
  expect(calculator.sum(-2, -2)).toBe(-4);
});

test('return the correct calculation of the subtract function in calculator object', () => {
  expect(calculator.subtract(2, 2)).toBe(0);
  expect(calculator.subtract(0, 2)).toBe(-2);
  expect(calculator.subtract(-2, -2)).toBe(0);
});

test('return the correct calculation of the divide function in calculator object', () => {
  expect(calculator.divide(2, 2)).toBe(1);
  expect(calculator.divide(0, 2)).toBe(0);
  expect(calculator.divide(-2, -2)).toBe(1);
});

test('return the correct calculation of the multiply function in calculator object', () => {
  expect(calculator.multiply(2, 2)).toBe(4);
  expect(calculator.multiply(0, 2)).toBe(0);
  expect(calculator.multiply(-2, -2)).toBe(4);
});

test('takes a string and returns it with each character “shifted”', () => {
  expect(caesarCipher('hello', 3)).toBe('khoor');
  expect(caesarCipher('Hello!', 3)).toBe('Khoor!');
  expect(caesarCipher('HeLlO! !', 3)).toBe('KhOoR! !');
  expect(caesarCipher('z', 1)).toBe('a');
});
