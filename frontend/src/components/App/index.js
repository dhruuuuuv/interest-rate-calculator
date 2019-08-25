import React, { Component } from "react"
import "./App.css"
import InterestAccumulatorPage from '../../pages/InterestAccumulatorPage';

class App extends Component {

	render () {
		return (
			<div className="App">
				<header className="App-header">
					<h1 className="App-title">Interest Accumulator</h1>
				</header>
				<InterestAccumulatorPage />
			</div>
		)
	}
}

export default App
