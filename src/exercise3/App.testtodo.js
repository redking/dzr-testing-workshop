import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';

jest.mock('../exercise2/App', () => props => <div className="mocked-app">{props.headerColor}</div>);
jest.useFakeTimers();

// Component under test
import App from './App';

describe('the 2nd exercise React App', function() {

	it('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<App />, div);
	});

	it('should display the Add app in the page', () => {
		const component = ReactTestUtils.renderIntoDocument(<App />);
		const innerApp = ReactTestUtils.findRenderedDOMComponentWithClass(component, 'mocked-app');

		expect(innerApp).toBeDefined();
	});

	it('should cycle through available headerColors on button click', () => {
		const component = ReactTestUtils.renderIntoDocument(<App />);
		const innerApp = ReactTestUtils.findRenderedDOMComponentWithClass(component, 'mocked-app');
		const button = ReactTestUtils.findRenderedDOMComponentWithClass(component, 'cycle');

		ReactTestUtils.Simulate.click(button);

		jest.runAllTimers();

		expect(innerApp.innerHTML).toBe('white');

		ReactTestUtils.Simulate.click(button);

		jest.runAllTimers();

		expect(innerApp.innerHTML).toBe('black');

		ReactTestUtils.Simulate.click(button);

		jest.runAllTimers();

		expect(innerApp.innerHTML).toBe('white');

	});

});
