import { Linter } from 'eslint';
import { importPlugin, simpleImportSortPlugin, unusedImportsPlugin } from '../plugins';

export const imports = (): Linter.FlatConfig => {
  return {
    plugins: {
      'simple-import-sort': simpleImportSortPlugin,
      import: importPlugin,
      'unused-imports': unusedImportsPlugin,
    },
    rules: {
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      'import/first': 'error',
      'import/no-duplicates': 'error',
      'import/newline-after-import': 'error',
      'import/no-mutable-exports': 'error',
      'import/no-self-import': 'error',
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'error',
        { args: 'after-used', argsIgnorePattern: '^_', vars: 'all', varsIgnorePattern: '^_' },
      ],
    },
  };
};
