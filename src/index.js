import input from './input';
import { calculate } from './sum';

const sayHello = _ => {
  const size = input.sizeOfArray();
  const elements = input.elementsOfArray();
  const sum = calculate(size, elements);
  console.log('size', size);
  console.log('elements', elements);
  console.log('sum', sum);
};

sayHello();

export default sayHello;
