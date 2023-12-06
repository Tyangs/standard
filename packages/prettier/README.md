# @tyangs/prettier

English / [简体中文](./README_CN.md)

## Usage

### Install

```bash
npm install @tyangs/prettier prettier -D
# or
yarn add @tyangs/prettier prettier -D
# or
pnpm install @tyangs/prettier prettier -D
```

### Create config file

> If you fully agree with `@tyangs/prettier` config, it's recommended to use with `JSON`.
>
> If you agree with some parts of `@tyangs/prettier` config and need to add some custom configs, it's recommended to use with `CJS` or `ESM`.
>
> For more details, refer to the [Prettier Configuration Documentation](https://prettier.io/docs/en/configuration).

With `ESM`: [`"type": "module"`](https://nodejs.org/api/packages.html#type) in `package.json`

- `.prettierrc.js`
- `prettier.config.js`
- `.prettierrc.mjs`
- `prettier.config.mjs`

```js
import options from '@tyangs/prettier';

/** @type {import("prettier").Config} */
export default {
  ...options,
  // Add your custom config here to override
};
```

With `CJS`: [`"type": "commonjs"`](https://nodejs.org/api/packages.html#type) in `package.json`

- `.prettierrc.js`
- `prettier.config.js`
- `.prettierrc.cjs`
- `prettier.config.cjs`

```js
/** @type { import("prettier").Config } */
module.exports = {
  ...require('@tyangs/prettier'),
  // Add your custom config here to override
};
```

With JSON:

- `.prettierrc`
- `.prettierrc.json`
- `.prettierrc.json5`

```json
"@tyangs/prettier"
```

- `package.json`

```json
{
  "prettier": "@tyangs/prettier"
}
```

### Add script for package.json

For example:

```json
{
  "scripts": {
    "format": "prettier --write \"./**/*.{js,jsx,ts,tsx,json,vue}\""
  }
}
```

### Lint Staged (recommend)

If you want to apply lint and auto-fix before every commit, you can add the following to your `package.json`:

```json
{
  "simple-git-hooks": {
    "pre-commit": "npm run lint-staged"
  },
  "lint-staged": {
    "*": "npm run format"
  }
}
```

and then

```bash
npm install lint-staged simple-git-hooks -D
```
