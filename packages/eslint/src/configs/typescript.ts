import { Linter } from 'eslint';

import { GLOB_CJS, GLOB_SRC } from '../globs';
import { parserTs, pluginTs } from '../plugins';
import { renameRules } from '../utils';

const typeAwareRules: Linter.FlatConfig['rules'] = {
  'dot-notation': 'off',
  'no-implied-eval': 'off',
  'no-throw-literal': 'off',
  'ts/await-thenable': 'error',
  'ts/dot-notation': ['error', { allowKeywords: true }],
  'ts/no-floating-promises': 'error',
  'ts/no-for-in-array': 'error',
  'ts/no-implied-eval': 'error',
  'ts/no-misused-promises': 'error',
  'ts/no-throw-literal': 'error',
  'ts/no-unnecessary-type-assertion': 'error',
  'ts/no-unsafe-argument': 'error',
  'ts/no-unsafe-assignment': 'error',
  'ts/no-unsafe-call': 'error',
  'ts/no-unsafe-member-access': 'error',
  'ts/no-unsafe-return': 'error',
  'ts/restrict-plus-operands': 'error',
  'ts/restrict-template-expressions': 'error',
  'ts/unbound-method': 'error',
};

export interface ITypeScriptOptions {
  tsconfigPath?: string;
}

export const typescript = (options?: ITypeScriptOptions): Linter.FlatConfig[] => {
  const { tsconfigPath } = options ?? {};

  return [
    {
      files: [GLOB_SRC],
      languageOptions: {
        parser: parserTs,
        parserOptions: {
          sourceType: 'module',
          ...(tsconfigPath
            ? {
                project: [tsconfigPath],
                tsconfigRootDir: process.cwd(),
              }
            : {}),
        },
      },
      plugins: {
        ts: pluginTs,
      },
      rules: {
        ...renameRules(
          // eslint-disable-next-line ts/no-non-null-assertion
          pluginTs.configs['eslint-recommended'].overrides![0].rules!,
          '@typescript-eslint/',
          'ts/',
        ),
        // eslint-disable-next-line ts/no-non-null-assertion
        ...renameRules(pluginTs.configs.strict.rules!, '@typescript-eslint/', 'ts/'),
        ...(tsconfigPath ? typeAwareRules : {}),

        'ts/no-explicit-any': 'warn',
      },
    },
    {
      files: [GLOB_CJS],
      rules: {
        'ts/no-require-imports': 'off',
        'ts/no-var-requires': 'off',
      },
    },
  ];
};
