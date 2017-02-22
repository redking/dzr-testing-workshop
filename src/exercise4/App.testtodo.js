import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';

// -- Mocks go here --

// Component under test
import App from './App';

describe('the 2nd exercise React App', function() {

	beforeEach(() => {
		// TODO
	});

	it('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<App />, div);
	});

	it('should display the username in the <footer>', done => {
		done();
	});

	it('should print "User: unknown" if the server returns an error', done => {
		done();
	});

	it('should call tracking() before and after a successful call to the server');

	it('should only call tracking() before an unsuccessful call to the server');

});
