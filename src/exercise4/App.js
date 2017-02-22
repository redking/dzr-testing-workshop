import React, {Component} from 'react';
import http from 'http';

// Components
import AddApp from '../exercise2/App';

// Go to the server and fetch the given URL
function _request(url) {
	return new Promise(resolve => {
		http.get({path: url}, response => {
			let data = '';
			response.on('data', _data => data += _data);
			response.on('end', () => resolve(data));
		})
	})
}

class App extends Component {

	constructor(props) {
		super(props);

		this.state = {
			userName: ''
		};
	}

	componentDidMount() {
		_request('http://localhost:8080').then(user => {
			user = JSON.parse(user);
			this.setState({
				userName: user.name
			});
		})
	}

	render() {
		const {userName} = this.state;

		return (
			<div>
				<AddApp exercise="4" /><br />
				{userName ?
				<footer>
					User: {userName}
				</footer> : null}
			</div>
		);
	}
}

export default App;
