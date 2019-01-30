import _ from 'lodash';

const size = (sizeOfArray) => {
  return sizeOfArray > 0;
};

const match = (sizeOfArray, elements) => {
  const sizeOfElements = _.size(elements);
  if (size(sizeOfArray)) {
    if (sizeOfElements) {
      return sizeOfElements === sizeOfArray;
    }
  }
  return false;
};

const validator = {
  size,
  match,
};

export default validator;
