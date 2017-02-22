import add from './add';

describe('the add module', function() {

	it('adds two numbers', () => {
		expect(add(1, 2)).toBe(3);
		expect(add(0, 0)).toBe(0);
		expect(add(5, -10)).toBe(-5);
	});

	// e.g. add(1) should return 1
	it('returns the argument if only one number is provided', () => {
		expect(add(1)).toBe(1);
	});

	it('throws an error if arguments are not numbers', () => {
		expect(() => {add('test')}).toThrow();
	});

	it('throws an error if no arguments are passed', () => {
		expect(() => add()).toThrow()
	});

});
