const user = {
	name: 'Brian'
};

export default function request(url) {
	return new Promise((resolve, reject) => {
		if (url !== 'error') {
			resolve(JSON.stringify(user));
		} else {
			reject({error: 'User not found'});
		}
	});
}
