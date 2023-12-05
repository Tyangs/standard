# @tyangs/commitlint

[English](./README.md) / 简体中文

## 开始使用

### 安装依赖

```bash
npm install @tyangs/commitlint @commitlint/cli -D
# 或
yarn add @tyangs/commitlint @commitlint/cli -D
# 或
pnpm install @tyangs/commitlint @commitlint/cli -D
```

### 创建配置文件

> 参考 [commitlint](https://commitlint.js.org/#/reference-configuration) 的官方文档配置.

创建 `commitlint.config.js` 或 `.commitlintrc.js` 配置文件。

```javascript
module.exports = {
  extends: ['@tyangs/commitlint'],
  // 在此处添加自定义配置
};
```

### 校验 git 提交信息通过 git hook

使用 [`simple-git-hooks`](https://github.com/toplenboren/simple-git-hooks):

1. 依赖安装

   ```bash
   npm install simple-git-hooks -D
   ```

2. 编辑 `package.json > prepare` 的脚本信息，并执行一遍

   ```bash
   npm pkg set scripts.prepare="simple-git-hooks"
   npm run prepare
   ```

3. 添加 `commit-msg` hook 在你的 package.json 文件
   ```json
   "simple-git-hooks": {
      "commit-msg": "npx --no-install commitlint --edit $1"
   }
   ```

使用 [`husky`](https://github.com/typicode/husky)

1. 依赖安装

   ```bash
   npm install husky -D
   ```

2. 编辑 `package.json > prepare` 的脚本信息，并执行一遍

   ```bash
   npm pkg set scripts.prepare="husky install"
   npm run prepare
   ```

3. 添加 `commit-msg` 钩子
   ```bash
   npx husky add .husky/commit-msg "npx --no-install commitlint --edit $1"
   git add .husky/commit-msg
   ```

然后，当你执行 git commit -m 'xxx' 时，`commitlint` 将会对你输入的 msg 进行检查。
