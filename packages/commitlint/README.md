# @tyangs/commitlint

English / [简体中文](./README_CN.md)

## Usage

### Install

```bash
npm install @tyangs/commitlint @commitlint/cli -D
# or
yarn add @tyangs/commitlint @commitlint/cli -D
# or
pnpm install @tyangs/commitlint @commitlint/cli -D
```

### Create config file

> Reference the official config of [commitlint](https://commitlint.js.org/#/reference-configuration).

create `commitlint.config.js` or `.commitlintrc.js` file for commitlint config configuration.

```javascript
module.exports = {
  extends: ['@tyangs/commitlint'],
  // Add your custom config here to override
};
```

### Lint commit msg by git hook

Use [`simple-git-hooks`](https://github.com/toplenboren/simple-git-hooks):

1. Install

   ```bash
   npm install simple-git-hooks -D
   ```

2. Edit `package.json > prepare` script and run it once:

   ```bash
   npm pkg set scripts.prepare="simple-git-hooks"
   npm run prepare
   ```

3. Add `commit-msg` hook in your package.json
   ```json
   "simple-git-hooks": {
      "commit-msg": "npx --no-install commitlint --edit $1"
   }
   ```

Use [`husky`](https://github.com/typicode/husky)

1. Install

   ```bash
   npm install husky -D
   ```

2. Edit `package.json > prepare` script and run it once

   ```bash
   npm pkg set scripts.prepare="husky install"
   npm run prepare
   ```

3. Add `commit-msg` hook
   ```bash
   npx husky add .husky/commit-msg "npx --no-install commitlint --edit $1"
   git add .husky/commit-msg
   ```

Then, when you execute `git commit -m 'xxx'`, `commitlint` will check the message you input.
