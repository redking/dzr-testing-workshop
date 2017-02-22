import React, {Component} from 'react';

// Components
import AddApp from '../exercise2/App';

class App extends Component {

	constructor(props) {
		super(props);

		this.state = {
			colorIndex: 0
		};
	}

	static defaultProps = {
		colors: ['black', 'white']
	};

	render() {
		return (
			<div>
				<AddApp headerColor={this.props.colors[this.state.colorIndex]} exercise="3" />
				<br />
				<button type="button" className="cycle" onClick={e => this._changeColor()}>
					Change header color
				</button>
			</div>
		);
	}

	// -- Private methods --

	_changeColor() {
		setTimeout(() => {
			this.setState({
				colorIndex: ++this.state.colorIndex % this.props.colors.length
			});
		}, 100);
	}
}

export default App;
