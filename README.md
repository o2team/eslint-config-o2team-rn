# eslint-config-o2team-rn [![Build Status](https://travis-ci.org/o2team/eslint-config-o2team-rn.svg?branch=master)](https://travis-ci.org/o2team/eslint-config-o2team-rn)


> ESLint [Shareable Config](http://eslint.org/docs/developer-guide/shareable-configs.html) for the O2Team RN Style Guide. Base on [eslint-config-o2team](https://github.com/o2team/eslint-config-o2team).

## Installation

```
$ npm install --save-dev eslint eslint-config-o2team-rn
```


## Usage

### eslint-config-o2team-rn

Once the `eslint-config-o2team-rn` package is installed, you can use it by specifying `o2team` in the `extends` section of your [ESLint configuration](http://eslint.org/docs/user-guide/configuring).

```js
{
  "extends": "eslint-config-o2team-rn",
  "rules": {
    // Additional, per-project rules...
  }
}
```

or yml:

```yml

extends:
  - eslint-config-o2team-rn
rules: 
  # Additional, per-project rules...

```

Or you can specifying `eslint-config-o2team-rn` in the `eslintConfig` section of your `package.json`

```json
{
  "eslintConfig": {
    "extends": "eslint-config-o2team-rn"
  }
}
```


## [License](LICENSE)