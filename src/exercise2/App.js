import React, {Component} from 'react';
import classnames from 'classnames';
import logo from '../logo.svg';
import '../App.css';

// Modules
import add from '../exercise1/add';

class App extends Component {

	constructor(props) {
		super(props);

		this.state = {
			result: 0
		};
	}

	static defaultProps = {
		exercise: 2,
		headerColor: 'black'
	};

	render() {
		const {result} = this.state;
		const resultClasses = classnames({
			positive: result > 0,
			negative: result < 0
		});

		return (
			<div>
				<div className="App-header" style={{backgroundColor: this.props.headerColor}}>
					<img src={logo} className="App-logo" alt="logo" />
					<h2>Jest Unit Testing - Exercise {this.props.exercise}</h2>
				</div>
				<br />
				<form onSubmit={e => this._add(e)}>
					<label htmlFor="num1">
						Number 1
					</label>
					<input type="text" id="num1" ref="num1" /><br />
					<label htmlFor="num2">
						Number 2
					</label>
					<input type="text" id="num2" ref="num2" /><br />
					<label htmlFor="result">
						Result
					</label>
					<input type="text" disabled="disabled" className={resultClasses} value={this.state.result} /><br />
					<button type="submit">Add</button>
				</form>
			</div>
		);
	}

	_add(e) {
		e.preventDefault();

		const {num1, num2} = this.refs;
		this.setState({
			result: add(Number(num1.value), Number(num2.value))
		});
	}
}

export default App;
