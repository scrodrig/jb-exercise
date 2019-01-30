import { expect } from 'chai';
import validator from '../src/validator';

let chance = require('chance').Chance();

describe('size validator test', () => {
  describe('size param for function', () => {
    it('should return false when it receives a zero', () => {
      const result = validator.size(0);
      expect(result).to.be.false;
    });

    it('should return false when it receives a negative number', () => {
      const random_integer = chance.integer({ max: -1 });
      const result = validator.size(random_integer);
      expect(result).to.be.false;
    });

    it('should return false when it receives null', () => {
      const result = validator.size(null);
      expect(result).to.be.false;
    });

    it('should return false when it receives a number greater than zero', () => {
      const random_integer = chance.integer({ min: 1 });
      const result = validator.size(random_integer);
      expect(result).to.be.true;
    });
  });

  describe('matches first param for size of array of numbers', () => {
    it('should return false when it receives a zero on first parameter', () => {
      const result = validator.match(0, []);
      expect(result).to.be.false;
    });

    it('should return false when it receives the second param empty', () => {
      const random_integer = chance.integer({ min: 1 });
      const result = validator.match(random_integer, []);
      expect(result).to.be.false;
    });

    it('should return false when it receives the second param null', () => {
      const random_integer = chance.integer({ min: 1 });
      const result = validator.match(random_integer, null);
      expect(result).to.be.false;
    });

    it('should return false when it receives different size for params', () => {
      const firstElement = chance.integer();
      const secondElement = chance.integer();
      const result = validator.match(1, [firstElement, secondElement]);
      expect(result).to.be.false;
    });

    it('should return true when it receives same size for both params', () => {
      const firstElement = chance.integer();
      const result = validator.match(1, [firstElement]);
      expect(result).to.be.true;
    });
  });
});
