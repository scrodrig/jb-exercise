import { expect } from 'chai';
import { sum, calculate } from '../src/sum';
import errors from '../src/errors';

let chance = require('chance').Chance();

const chai = require('chai');
const spies = require('chai-spies');
chai.use(spies);

describe('sum test', () => {
  describe('sum function', () => {
    it('should return 0 when it does not have params', () => {
      const result = sum();
      expect(result).to.equal(0);
    });

    it('should return 0 when it does an empty array of params', () => {
      const result = sum([]);
      expect(result).to.equal(0);
    });

    it('should return 0 when it receives null', () => {
      const result = sum(null);
      expect(result).to.equal(0);
    });

    it('should return the one element value when it receives one element in the array', () => {
      const random_integer = chance.integer({ min: -100, max: 100 });
      const result = sum([random_integer]);
      expect(result).to.equal(random_integer);
    });

    it(
      'should return the the calculate of values when it receives more than one element in the array',
      () => {
        const first_random_integer = chance.integer({ min: -100, max: 100 });
        const second_random_integer = chance.integer({ min: -100, max: 100 });
        const expected = first_random_integer + second_random_integer;
        const result = sum([first_random_integer, second_random_integer]);
        expect(result).to.equal(expected);
      });

    it('should return the the calculate of values when it receives a non NaN in the array', () => {
      const first_random_integer = chance.integer({ min: -100, max: 100 });
      const result = sum([first_random_integer, NaN]);
      expect(result).to.be.NaN;
    });

    it('should return the the calculate of values when it receives a non NaN in the array', () => {
      const first_random_integer = chance.integer({ min: -100, max: 100 });
      const result = sum([first_random_integer, NaN]);
      expect(result).to.be.NaN;
    });

    it('shows print an error message when the result is NaN', () => {
      const random_integer = chance.integer({ min: -100, max: 100 });
      chai.spy.on(console, 'warn');
      sum([random_integer, NaN]);
      expect(console.warn).to.have.been.called();
      chai.spy.restore(console);
    });

  });

  describe('calculate function', () => {
    it('should return -1 when it does not match params', () => {
      const random_size = chance.integer({ min: 3, max: 10 });
      const first_random_integer = chance.integer({ min: -100, max: 100 });
      const second_random_integer = chance.integer({ min: -100, max: 100 });
      const elements = [first_random_integer, second_random_integer];
      const result = calculate(random_size, elements);
      expect(result).to.equal(-1);
    });

    it('shows print an error message when the result is size entered and array size does not match',
      () => {
        const random_integer = chance.integer({ min: -100, max: 100 });
        chai.spy.on(console, 'warn');
        calculate(3, [random_integer, NaN]);
        expect(console.warn).to.have.been.called();
        chai.spy.restore(console);
      });
  });
});
