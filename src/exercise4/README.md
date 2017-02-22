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
- If you need to wait on an asynchronous process other than a timeout, pass `done` as an argument to your test and invoke this callback once the process has finished

For example

```
it('should do something', done => {
	someAsynchronousProcess(() => {
		expect(something).toBe(something);
		done();
	});
})

```

- If you have to wait for a lifecycle method or a Promise to resolve, use `process.nextTick` to wait for the next turn of the event loop

For example

```
it('should do something', done => {
	const component = ReactTestUtils.renderIntoDocument(<App />);
	process.nextTick(() => {
		expect(something).toBe(something);
		done();
	});
})

```

- Close the `node server.js` console and re-run the test - the test will pass as no attempt is made to contact the real server
- Close the `node server.js` console and comment out the `jest.mock('./request') line. Re-run the test & note how the test fails as a real request is performed
- 
 