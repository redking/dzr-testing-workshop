import React, {Component} from 'react';
import logo from '../logo.svg';
import '../App.css';

// Modules
import add from './add';

class App extends Component {
	render() {
		return (
			<div>
				<div className="App-header">
					<img src={logo} className="App-logo" alt="logo"/>
					<h2>Jest Unit Testing - Exercise 1</h2>
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
					<input type="text" ref="result" disabled="disabled" /><br />
					<button type="submit">Add</button>
				</form>
			</div>
		);
	}

	_add(e) {
		e.preventDefault();

		const {num1, num2, result} = this.refs;
		result.value = add(Number(num1.value), Number(num2.value));
	}
}

export default App;
