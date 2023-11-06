import { Linter } from 'eslint';

import { GLOB_JSX, GLOB_TSX } from '../globs';
import { jsxA11yPlugin, parserTs, reactHooksPlugin, reactPlugin } from '../plugins';

export interface IReactOptions {
  typescript?: boolean;
}

export const react = (options?: IReactOptions): Linter.FlatConfig[] => {
  const { typescript } = options ?? {};

  return [
    {
      plugins: {
        react: reactPlugin,
        'react-hooks': reactHooksPlugin,
        'jsx-a11y': jsxA11yPlugin,
      },
    },
    {
      files: [GLOB_JSX, GLOB_TSX],
      languageOptions: {
        parserOptions: {
          ecmaFeatures: {
            jsx: true,
          },
          parser: typescript ? parserTs : null,
          sourceType: 'module',
        },
      },
      rules: {
        ...reactPlugin.configs.recommended.rules,
        ...reactHooksPlugin.configs.recommended.rules,
        ...jsxA11yPlugin.configs.recommended.rules,
        'react-hooks/exhaustive-deps': 'error',
        'react-hooks/rules-of-hooks': 'error',
      },
      settings: {
        react: {
          // You can add this if you get a warning about the React version when you lint
          version: 'detect',
        },
      },
    },
  ];
};
