import { Linter } from 'eslint';

import { ignores, imports, javascript, react, typescript } from './configs';

export interface IConfigOptions {
  typescript?: boolean;
  react?: boolean;
}

export const factory = (options?: IConfigOptions): Linter.FlatConfig[] => {
  const { typescript: enableTypeScript, react: enableReact } = options ?? {};

  const configs: Linter.FlatConfig[] = [...javascript(), ...ignores(), ...imports()];

  if (enableTypeScript) {
    configs.push(...typescript());
  }

  if (enableReact) {
    configs.push(
      ...react({
        typescript: enableTypeScript,
      }),
    );
  }

  return configs;
};
