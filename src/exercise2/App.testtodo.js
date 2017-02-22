import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';

jest.mock('../exercise1/add', () => (num1, num2) => {
	if (num1 !== 999) {
		return num1 + num2;
	}

	throw new Error();
});

// Component under test
import App from './App';

describe('the 2nd exercise React App', function() {

	it('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<App />, div);
	});

	it('adds the two input fields together on form submission', () => {
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

	it('should set the header color via the headerColor prop', () => {
		let component = ReactTestUtils.renderIntoDocument(<App />);
		let header = ReactTestUtils.findRenderedDOMComponentWithClass(component, 'App-header');

		expect(header.getAttribute('style')).toContain('black');

		component = ReactTestUtils.renderIntoDocument(<App headerColor="red" />);
		header = ReactTestUtils.findRenderedDOMComponentWithClass(component, 'App-header');

		expect(header.getAttribute('style')).toContain('red');
	});

	it('should set the exercise number via the exercise prop', () => {
		let component = ReactTestUtils.renderIntoDocument(<App />);
		let h2 = ReactTestUtils.findRenderedDOMComponentWithTag(component, 'h2');

		expect(h2.innerHTML).toContain('<span>2</span>');

		component = ReactTestUtils.renderIntoDocument(<App exercise="99" />);
		h2 = ReactTestUtils.findRenderedDOMComponentWithTag(component, 'h2');

		expect(h2.innerHTML).toContain('<span>99</span>');
	});

	it('sets the "positive" class on the result field when the result is greater than zero', () => {
		const component = ReactTestUtils.renderIntoDocument(<App />);
		const button = ReactTestUtils.findRenderedDOMComponentWithTag(component, 'button');
		const result = ReactTestUtils.findRenderedDOMComponentWithClass(component, 'result');

		// Set values in the input fields
		component.refs.num1.value = 10;
		component.refs.num2.value = 10;

		// Click the button
		ReactTestUtils.Simulate.click(button);

		// Check the class
		expect(result.className).toContain('positive');
		expect(result.className).not.toContain('negative');
	});

	it('sets the "negative" class on the result field when the result is less than zero', () => {
		const component = ReactTestUtils.renderIntoDocument(<App />);
		const button = ReactTestUtils.findRenderedDOMComponentWithTag(component, 'button');
		const result = ReactTestUtils.findRenderedDOMComponentWithClass(component, 'result');

		// Set values in the input fields
		component.refs.num1.value = 10;
		component.refs.num2.value = -11;

		// Click the button
		ReactTestUtils.Simulate.click(button);

		// Check the class
		expect(result.className).not.toContain('positive');
		expect(result.className).toContain('negative');
	});

	it('sets no class on the result field if the result is equal to zero', () => {
		const component = ReactTestUtils.renderIntoDocument(<App />);
		const button = ReactTestUtils.findRenderedDOMComponentWithTag(component, 'button');
		const result = ReactTestUtils.findRenderedDOMComponentWithClass(component, 'result');

		// Set values in the input fields
		component.refs.num1.value = 10;
		component.refs.num2.value = -10;

		// Click the button
		ReactTestUtils.Simulate.click(button);

		// Check the class
		expect(result.className).not.toContain('positive');
		expect(result.className).not.toContain('negative');
	});

	it('should set "err" in the result field if `add` throws an exception', () => {
		const component = ReactTestUtils.renderIntoDocument(<App />);
		const button = ReactTestUtils.findRenderedDOMComponentWithTag(component, 'button');
		const result = ReactTestUtils.findRenderedDOMComponentWithClass(component, 'result');

		// Set values in the input fields
		component.refs.num1.value = 999;
		component.refs.num2.value = 10;

		// Click the button
		ReactTestUtils.Simulate.click(button);

		// Check the value
		expect(result.value).toBe("Err");
	});

});
