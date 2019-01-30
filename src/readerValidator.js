import _ from 'lodash';

const sizeOfArray = (size) => {
  if (Number.isInteger(size) && size > 0) {
    return size;
  }
  return -1;
};

const arrayFromString = (elements) => {
  if (_.isEmpty(elements)) {
    return [];
  }
  const array = _.split(elements, ' ');
  return _.map(array, (element) => {
    return parseInt(element);
  });
};

const readerValidator = {
  sizeOfArray,
  arrayFromString,
};

export default readerValidator;
