import { greeting } from '../utils';

const helloString = (name: string): string => {
  return `${greeting()} ${name}`;
};

export default helloString;
