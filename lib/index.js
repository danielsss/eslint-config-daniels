'use strict';

const env = require('./env');
const options = require('./options');
const rules = require('./rules');

module.exports = {
  parserOptions: options,
  env,
  rules,
};
