import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

describe('the 2nd exercise React App', function() {

	it('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<App />, div);
	});

	it('should display the username in the <footer>');

});



