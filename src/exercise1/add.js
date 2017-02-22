function add(x, y) {
	if (typeof x !== 'number' || (arguments.length === 2 && typeof y !== 'number')) {
		throw new Error('Invalid arguments');
	}

	if (arguments.length === 1) {
		return x;
	}

	return x + y;
}

export default add;
