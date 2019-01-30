import input from '../src/input';
import { expect } from 'chai';

let chance = require('chance').Chance();

describe('input test', () => {
  describe('size', () => {
    it('should be an integer', () => {
      const inputSize = input.sizeOfArray();
      expect(inputSize).to.satisfy(Number.isInteger);
    });
  });

  describe('error message', () => {
    it('elements', () => {
      const inputSize = input.elementsOfArray();
      expect(inputSize).to.be.an('array');
    });
  });
});

