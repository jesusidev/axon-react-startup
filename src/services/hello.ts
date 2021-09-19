import { greeting } from '../utils';

const helloString = (name: string | null): string => {
  return `${greeting()} ${name}`;
};

export default helloString;
