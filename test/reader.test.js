import { expect } from 'chai';
import readerValidator from '../src/readerValidator';

let chance = require('chance').Chance();

describe('reader test', () => {
  describe('the entry for size of array', () => {
    it('should return false when it receives a zero', () => {
      const result = readerValidator.sizeOfArray(0);
      expect(result).to.equal(-1);
    });

    it('should return false when it receives a float number', () => {
      const result = readerValidator.sizeOfArray(4.2);
      expect(result).to.be.equal(-1);
    });

    it('should return false when it receives a string', () => {
      const random_word = chance.word();
      const result = readerValidator.sizeOfArray(random_word);
      expect(result).to.be.equal(-1);
    });

    it('should return true when it receives a integer positive number', () => {
      const random_word = chance.integer({ min: 1 });
      const result = readerValidator.sizeOfArray(random_word);
      expect(result).to.be.equal(random_word);
    });
  });

  describe('the entry should be an string and return a array of elements', () => {
    describe('arrayFromString', () => {
      it('gets an empty array when the string is empty', () => {
        const result = readerValidator.arrayFromString('');
        expect(result).to.deep.equal([]);
      });
    });

    describe('arrayFromString', () => {
      it('gets an array when the string is with two elements separated by spaces integer format',
        () => {
          const result = readerValidator.arrayFromString('1 2');
          expect(result).to.deep.equal([1, 2]);
        });
    });
  });
});
