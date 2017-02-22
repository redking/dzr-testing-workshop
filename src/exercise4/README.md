# Exercise 4 - Calls to the server

## Description

In this exercise, we wrap the app from exercise 2, adding a button that changes
the color of the site header.

This change occurs upon click with a delay of 100ms i.e. it is asynchronous

## Prerequisites

1. If `npm test` or `npm start` is running, close it with `ctrl - C`
2. Rename the file `src/exercise4/App.testtodo.js` to `src/exercise4/App.test.js`
3. Open the file `src/index.js` and rename the import on line 3 to `exercise4/App`
4. Open a new console window and launch the command `node server.js` from the root of this project

## Task

In this exercise you'll be writing tests for code that calls a server

- Launch Jest with the command `npm test`.
- Open the file `src/exercise4/App.test.js` and implement the empty tests.
- Some of the tests should fail. Modify `exercise4/App.js` to pass the tests

## Tips

- Look at the example in the Jest docs on how to mock a server response

https://facebook.github.io/jest/docs/tutorial-async.html

- We'll be writing a manual mock for `request.js` this time, which will be stored in the `__mocks__` directory
- As our code uses promises in `componentDidMount` we must return a `Promise` from our test - Jest will wait for the promise to resolve, matching
the behaviour of our code

For example

```
it('should do something', () => {
	return new Promise(resolve => resolve()).then(() => {
		expect(something).toBe(something);
	});
})

```
- Count the number of times a mock is called by examining the `mock.calls` array on the mock object. You can access the mock object 
by requiring the mocked module, as long as you do it *after* the call to `jest.mock`

For example, using CommonJS syntax:

```
var module = require('./path/to/module'); // This will return the original module

jest.mock('./path/to/module');

module = require('./path/to/module'); // This would return the mocked module
```

- Don't forget to reset the test environment before each test using `beforeEach`. 
- Close the `node server.js` console and re-run the test - the test will pass as no attempt is made to contact the real server
- Close the `node server.js` console and comment out the `jest.mock('./request') line. Re-run the test & note how the test fails as a real request is performed
