import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

describe('the 2nd exercise React App', function() {

	it('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<App />, div);
	});

	it('adds the two input fields together on form submission');

	it('should set the header color via the headerColor prop');

	it('should set the exercise number via the exercise prop');

	it('sets the "positive" class on the result field when the result is greater than zero');

	it('sets the "negative" class on the result field when the result is less than zero');

	it('sets no class on the result field if the result is equal to zero');

	it('should display an error message if the add function throws an error');

});



