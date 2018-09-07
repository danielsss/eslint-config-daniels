'use strict';
const assert = require('assert');
const eslint = require('eslint');
const conf = require('../lib/index');

// The source files to lint.
const repoFiles = [
  'lib/index.js',
  'test/index.test.js',
];

// Use the rules defined in this repo to test against.
const eslintOpts = {
  useEslintrc: false,
  envs: ['browser', 'commonjs', 'es6'],
  parserOptions: {'ecmaVersion': 2018, 'sourceType': 'module'},
  rules: conf.rules,
  fix: true,
};

// Runs the linter on the repo files and asserts no errors were found.
const report = new eslint.CLIEngine(eslintOpts).executeOnFiles(repoFiles);
assert.equal(report.errorCount, 0);
assert.equal(report.warningCount, 0);
repoFiles.forEach((file, index) => {
  assert(report.results[index].filePath.endsWith(file));
});
