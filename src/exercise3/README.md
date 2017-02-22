# Exercise 3 - Asynchronous Processes

## Description

In this exercise, we wrap the app from exercise 2, adding a button that changes
the color of the site header.

This change occurs upon click with a delay of 100ms i.e. it is asynchronous

## Prerequisites

1. If `npm test` or `npm start` is running, close it with `ctrl - C`
2. Rename the file `src/exercise3/App.testtodo.js` to `src/exercise3/App.test.js`
3. Open the file `src/index.js` and rename the import on line 3 to `exercise3/App`

## Task

In this exercise you'll be writing tests for an asynchronous process.

- Launch Jest with the command `npm test`.
- Open the file `src/exercise3/App.test.js` and implement the empty tests.
- Some of the tests should fail. Modify `exercise3/App.js` to pass the tests

## Tips

- The component `src/exercise2/App.js` is now an external module and must be mocked
- Use the matcher `toBeDefined` to check if an element returned from a find exists
- Add `jest.useFakeTimers();` before you import the component to test, to mock all timers
- Use `jest.runAllTimers();` in a test to advance any timers
- Try running your test with and without the line `jest.runAllTimers();`
