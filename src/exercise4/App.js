import React, {Component, PropTypes} from 'react';

// Modules
import request from './request';

// Components
import AddApp from '../exercise2/App';

class App extends Component {

	static propTypes = {
		url: PropTypes.string
	};

	static defaultProps = {
		url: 'http://localhost:8080'
	};

	constructor(props) {
		super(props);

		this.state = {
			userName: ''
		};
	}

	componentDidMount() {
		request(this.props.url).then(user => {
			user = JSON.parse(user);
			this.setState({
				userName: user.name
			});
		}, () => {
			this.setState({
				userName: 'Unknown'
			});
		});
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
