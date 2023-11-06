import { Linter } from 'eslint';
import { ignores, javascript, imports } from './configs';

export const factory = (): Linter.FlatConfig[] => {
  return [javascript(), ignores(), imports()];
};
