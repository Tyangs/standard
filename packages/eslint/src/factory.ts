import { Linter } from 'eslint';
import { ignores, javascript } from './configs';

export const factory = (): Linter.FlatConfig[] => {
  return [javascript(), ignores()];
};
