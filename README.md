# eslint-config-daniels [![Build Status](https://travis-ci.org/google/eslint-config-google.svg?branch=master)](https://travis-ci.org/google/eslint-config-google)

## Installation

```
$ npm install --save-dev eslint eslint-config-daniels
```


## Usage

Once the `eslint-config-daniels` package is installed, you can use it by specifying `daniels or ./node_moduls/eslint-config-daniels` in the [`extends`](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) section of your [ESLint configuration](http://eslint.org/docs/user-guide/configuring).

```js
{
  "extends": ["daniels"],
  "rules": {}
}
```

### Using the `daniels` config with `eslint:recommended`

There are several rules in the [`eslint:recommended` ruleset](http://eslint.org/docs/rules/) that Google style is not opinionated about that you might want to enforce in your project.

To use `daniels` style in conjunction with ESLint's recommended rule set, extend them both, making sure to list `daniels` last:

```js
{
  "extends": ["eslint:recommended", "daniels"],
  "rules": {}
}
```

### Using the overrites config

```js
{
  "extends": ["eslint:recommended", "daniels"],
  "rules": {}
  "overrites": [
    "daniles.overrites"
  ]
}
```

## License

MIT ©
