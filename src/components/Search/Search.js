import React, { Component } from 'react'
import axios from 'axios'

class Search extends Component {
	constructor(props) {
		super(props)

		this.state = {
			body: ''
		}
	}

	handleBody(e) {
		this.setState({
			body: e.target.innerHTML
		})

		this.getCoffees()
	}

	getCoffees() {
		axios.get('http://localhost:3001/coffees').then(res => {
			let results = res.data.filter(coffee => {
				let flavorProfile = coffee.flavorProfile[0]
				return flavorProfile.body === this.state.body
			})
			console.log(results)
		})
	}

	render() {
		return (
			<div className="search">
				<h2>Body</h2>
				<button onClick={e => this.handleBody(e)}>Light</button>
				<button onClick={e => this.handleBody(e)}>Balanced</button>
				<button onClick={e => this.handleBody(e)}>Full</button>
			</div>
		)
	}
}

export default Search
