# @tyangs/prettier - WIP

## Usage

### Install

```bash
pnpm i @tyangs/prettier prettier -D
# or
yarn add @tyangs/prettier prettier -D
# or
npm i @tyangs/prettier prettier -D
```

### Create config file

> If you fully agree with `@tyangs/prettier` config, it's recommended to use the `JSON` way.  
>  If you agree with some parts of `@tyangs/prettier` config and need to add some custom configs, it's recommended to use the `CJS` way.

#### With CJS:

- `.prettierrc.js`
- `.prettierrc.cjs`
- `prettier.config.js`
- `prettier.config.cjs`

```js
/**
 * @type { import("prettier").Config }
 */
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
