import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';

// -- Mocks go here

// Component under test
import App from './App';

describe('the 2nd exercise React App', function() {

	it('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<App />, div);
	});

	it('adds the two input fields together on button click', () => {
		const component = ReactTestUtils.renderIntoDocument(<App />);
		const button = ReactTestUtils.findRenderedDOMComponentWithTag(component, 'button');
		const result = ReactTestUtils.findRenderedDOMComponentWithClass(component, 'result');

		// Result has zero as a default value
		expect(result.value).toBe("0");

		// Set values in the input fields
		component.refs.num1.value = 10;
		component.refs.num2.value = 10;

		// Click the button
		ReactTestUtils.Simulate.click(button);

		// Check the value
		expect(result.value).toBe("20");
	});

	it('should set the header color via the headerColor prop');

	it('should set the exercise number via the exercise prop');

	it('sets the "positive" class on the result field when the result is greater than zero');

	it('sets the "negative" class on the result field when the result is less than zero');

	it('sets no class on the result field if the result is equal to zero');

	it('should set "err" in the result field if `add` throws an exception');

});



