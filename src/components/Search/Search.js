import React, { Component } from 'react'
import axios from 'axios'

import SearchResult from '../SearchResult/SearchResult'

import './Search.css'

class Search extends Component {
	constructor(props) {
		super(props)

		this.state = {
			body: '',
			searchResults: []
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

			this.setState({
				searchResults: results
			})
		})
	}

	render() {
		return (
			<div className="search">
				<h2>Body</h2>
				<button className="search-btn" onClick={e => this.handleBody(e)}>
					Light
				</button>
				<button className="search-btn" onClick={e => this.handleBody(e)}>
					Balanced
				</button>
				<button className="search-btn" onClick={e => this.handleBody(e)}>
					Full
				</button>
				{this.state.searchResults.length > 0 ? (
					<SearchResult searchResults={this.state.searchResults} />
				) : (
					''
				)}
			</div>
		)
	}
}

export default Search
