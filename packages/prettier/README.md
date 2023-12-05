# @tyangs/prettier

English / [简体中文](./README_CN.md)

## Usage

### Install

```bash
npm i @tyangs/prettier prettier -D
# or
yarn add @tyangs/prettier prettier -D
# or
pnpm i @tyangs/prettier prettier -D
```

### Create config file

> If you fully agree with `@tyangs/prettier` config, it's recommended to use with `JSON`.
>
> If you agree with some parts of `@tyangs/prettier` config and need to add some custom configs, it's recommended to use with `CJS` or `ESM`.
>
> For more details, refer to the [Prettier Configuration Documentation](https://prettier.io/docs/en/configuration).

#### With JS:

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

#### With JSON:

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
