# Exercise 1 - JavaScript Modules

## Description

When you run `npm start` you'll see a simple React app for adding two numbers together. The addition is handled by the module `src/exercise1/add.js`

## Task

In this exercise you'll be writing tests for a simple JavaScript module. We won't be testing the React component in this exercise.

- Launch Jest with the command `npm test`.
- Open the file `src/exercise1/add.test.js` and implement the empty tests.
- Some of the tests should fail. Modify `src/exercise1/add.js` to pass the tests

## Tips

- Use `expect()` and a matcher to describe expectations e.g. `expect(add(1, 0)).toBe(1)`
- Use the matcher `toThrow` to check an error condition.
- If you want to disable a test, change `it()` to `xit()`
- If you want to disable a test suite, change `describe()` to `xdescribe()`
- Try to test for all reasonable inputs
