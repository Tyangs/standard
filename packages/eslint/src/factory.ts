import { Linter } from 'eslint';

import { ignores, imports, javascript, typescript } from './configs';

export const factory = (): Linter.FlatConfig[] => {
  return [...javascript(), ...ignores(), ...imports(), ...typescript()];
};
