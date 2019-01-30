import inputFile from '../input/input.json';
import readerValidator from './readerValidator';

const sizeOfArray = () => {
  return readerValidator.sizeOfArray(inputFile.size);
};

const elementsOfArray = () => {
  return readerValidator.arrayFromString(inputFile.elements);
};

const input = {
  sizeOfArray,
  elementsOfArray,
};

export default input;
