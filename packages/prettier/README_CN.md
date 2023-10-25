# @tyangs/prettier

[English](./README.md) / 简体中文

## 开始使用

### 安装依赖

```bash
pnpm i @tyangs/prettier prettier -D
# 或
yarn add @tyangs/prettier prettier -D
# 或
npm i @tyangs/prettier prettier -D
```

### 创建配置文件

> 如果你完全赞同 `@tyangs/prettier` 配置，推荐你使用 `JSON` 方式；
>
> 如果你赞同部分 `@tyangs/prettier` 配置并且需要添加部分自定义配置，则推荐你使用 `CJS` 或者 `ESM` 的方式。
>
> 更多配置参考 [Prettier 配置](https://prettier.io/docs/en/configuration)。

#### JS 配置:

`ESM` 方式: 在 `package.json` 中设置 [`"type": "module"`](https://nodejs.org/api/packages.html#type)。

- `.prettierrc.js`
- `prettier.config.js`
- `.prettierrc.mjs`
- `prettier.config.mjs`

```js
import options from '@tyangs/prettier';

/** @type {import("prettier").Config} */
export default {
  ...options,
  // 在这里添加自定义配置
};
```

`CJS` 方式: 在 `package.json` 中设置 [`"type": "commonjs"`](https://nodejs.org/api/packages.html#type)。

- `.prettierrc.js`
- `prettier.config.js`
- `.prettierrc.cjs`
- `prettier.config.cjs`

```js
/** @type { import("prettier").Config } */
module.exports = {
  ...require('@tyangs/prettier'),
  // 在这里添加自定义配置
};
```

#### JSON 配置:

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
