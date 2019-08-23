import React, { Component } from "react"
import "./App.css"
import InterestAccumulatorPage from '../../pages/InterestAccumulatorPage';

class App extends Component {

	state = {
		// loading: false,
		// result: null
	}

	componentDidMount () {
		// calculate(1000, 1)
		// 	.then(r => this.setState({
		// 		loading: false,
		// 		result: r.data.result
		// 	}))
	}

	render () {
		const { loading, result } = this.state

		return (
			<div className="App">
				<header className="App-header">
					<h1 className="App-title">Interest Accumulator</h1>
				</header>
				{loading ?
					'Loading...'
					:
					<InterestAccumulatorPage {...{ result }} />
				}
			</div>
		)
	}
}

export default App
