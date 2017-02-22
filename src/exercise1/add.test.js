import add from './add';

describe('the add module', function() {

	it('adds two numbers', () => {
		expect(add(1, 2)).toBe(3);
	});

	// e.g. add(1) should return 1
	it('returns the argument if only one number is provided');

	it('throws an error if arguments are not numbers');

	it('throws an error if no arguments are passed');

});
