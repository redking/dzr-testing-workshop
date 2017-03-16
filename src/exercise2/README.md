# Exercise 2 - React Components

## Description

When you run `npm start` you'll see the same App from exercise 1, with the following differences

1. The React component uses its state to populate the result field
2. If the result is greater than zero, the field is colored green. A negative result
will turn the field red. A zero result will leave the input field at the default background color.

## Prerequisites

1. If `npm test` or `npm start` is running, close it with `ctrl - C`
2. Rename the file `src/exercise2/App.testtodo.js` to `src/exercise2/App.test.js`
3. Open the file `src/index.js` and rename the import on line 3 to `exercise2/App`

## Task

In this exercise you'll be writing tests for a simple React component.

- Launch Jest with the command `npm test`.
- Open the file `src/exercise2/App.test.js` and implement the empty tests.
- The `add.js` module from the previous exercise is an external module that must be mocked
- Some of the tests should fail. Modify `exercise2/App.js` to pass the tests

## Tips

- Use `ReactTestUtils.renderIntoDocument` to render your component in a test
- Use `jest.mock` to mock an external module
- Use `ReactTestUtils.findRenderedDOMComponentWithClass` to find a single node by classname
- Use `ReactTestUtils.findRenderedDOMComponentWithTag` to find a single node by tag name
- You can inspect props or state on the object returns by `renderIntoDocument`
- You can inspect attributes using `getAttribute` on the object returned by any of the find methods
- Use the matcher `toContain` to test that a string or array contains something e.g. `expect('foo bar').toContain('foo')`
- You can negate a matcher with `not` e.g. `expect('bar').not.toContain('foo')`
- It's ok to copy and paste code between tests such that they differ only slightly
