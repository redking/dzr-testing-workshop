import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';

jest.mock('./request');

// Component under test
import App from './App';

describe('the 2nd exercise React App', function() {

	it('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<App />, div);
	});

	it('should display the username in the <footer>', done => {
		const component = ReactTestUtils.renderIntoDocument(<App />);

		process.nextTick(() => {
			const footer = ReactTestUtils.findRenderedDOMComponentWithTag(component, 'footer');
			expect(footer.innerHTML).toContain('Brian');
			done();
		});

	});

	it('should print "User: unknown" if the server returns an error', done => {
		const component = ReactTestUtils.renderIntoDocument(<App url="error" />);

		process.nextTick(() => {
			const footer = ReactTestUtils.findRenderedDOMComponentWithTag(component, 'footer');
			expect(footer.innerHTML).toContain('Unknown');
			done();
		});
	});

});
