import _ from 'lodash';
import validator from './validator';

const sum = (arrayOfIntegers) => {
  if (_.isEmpty(arrayOfIntegers)) {
    return 0;
  }
  const result = _.sum(arrayOfIntegers);
  if (_.isNaN(result)) {
    console.warn('Non numbers could not be added');
  }
  return result;
};

const calculate = (size, elements) => {
  if (validator.match(size, elements)) {
    return sum(elements);
  }
  console.warn(`Size of elements (${_.size(elements)}) and entered (${size}) does not match`);
  return -1;
};

export { sum, calculate };
