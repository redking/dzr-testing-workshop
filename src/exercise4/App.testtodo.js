import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';

jest.mock('./request'); // Mocks using our manual mock
jest.mock('./tracking'); // Mocks with a standard Jest mock

// Modules
import tracking from './tracking'; // This will now return the mock object, rather than the tracking module

// Component under test
import App from './App';

describe('the 2nd exercise React App', function() {

	beforeEach(() => {
		tracking.mockReset();
	});

	it('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<App />, div);
	});

	it('should display the username in the <footer>', () => {
		const component = ReactTestUtils.renderIntoDocument(<App />);

		return new Promise(resolve => resolve()).then(() => {
			const footer = ReactTestUtils.findRenderedDOMComponentWithTag(component, 'footer');
			expect(footer.innerHTML).toContain('Brian');
		});

	});

	it('should print "User: unknown" if the server returns an error', () => {
		const component = ReactTestUtils.renderIntoDocument(<App url="error" />);

		return new Promise(resolve => resolve()).then(() => {
			const footer = ReactTestUtils.findRenderedDOMComponentWithTag(component, 'footer');
			expect(footer.innerHTML).toContain('Unknown');
		});
	});

	it('should call tracking() before and after a successful call to the server', () => {
		expect(tracking.mock.calls.length).toBe(0);

		const component = ReactTestUtils.renderIntoDocument(<App />);

		return new Promise(resolve => resolve()).then(() => {
			const footer = ReactTestUtils.findRenderedDOMComponentWithTag(component, 'footer');
			expect(tracking.mock.calls.length).toBe(2);
		});
	});

	it('should only call tracking() before an unsuccessful call to the server', () => {
		expect(tracking.mock.calls.length).toBe(0);

		const component = ReactTestUtils.renderIntoDocument(<App url="error" />);

		return new Promise(resolve => resolve()).then(() => {
			const footer = ReactTestUtils.findRenderedDOMComponentWithTag(component, 'footer');
			expect(tracking.mock.calls.length).toBe(1);
		});
	});

});
