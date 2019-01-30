import errors from '../src/errors';
import { expect } from 'chai';

let chance = require('chance').Chance();
const chai = require('chai');
const spies = require('chai-spies');
chai.use(spies);

describe('errors test', () => {
  describe('error message', () => {
    it('shows print an error message when a function presents', () => {
      const message = chance.sentence();
      chai.spy.on(console, 'warn');
      errors.print(message);
      expect(console.warn).to.have.been.called.with(message);
      chai.spy.restore(console)
    });
  });
});

