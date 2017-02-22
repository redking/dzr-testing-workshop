import http from 'http';

export default function request(url) {
	return new Promise((resolve, reject) => {
		http.get({path: url}, res => {
			if (res.statusCode === 200) {
				let data = '';
				res.on('data', _data => data += _data);
				res.on('end', () => resolve(data));
			} else {
				reject({Error: 'Server Error'})
			}
		})
	})
}
