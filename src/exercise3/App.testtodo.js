import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';

// -- Mocks and mock timers go here

// Component under tests
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

	it('should cycle through available headerColors on button click');

});



