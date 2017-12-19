import React, { Component } from 'react'
import axios from 'axios'

import DiscoverCriteria from '../DiscoverCriteria/DiscoverCriteria'
import DiscoverResult from '../DiscoverResult/DiscoverResult'

class Discover extends Component {
	constructor(props) {
		super(props)

		const bodyCriteria = ['Light', 'Balanced', 'Full']
		const acidityCriteria = ['Low', 'Medium', 'High']
		const notesCriteria = [
			'Fruity',
			'Sour',
			'Earthy',
			'Roasted',
			'Spicy',
			'Nutty / Chocolatey',
			'Sweet',
			'Floral',
			'Weird'
		]

		this.state = {
			coffees: [],
			bodyClicked: false,
			acidityClicked: false,
			body: '',
			acidity: '',
			discoverResults: []
		}

		this.handleBody = this.handleBody.bind(this)
	}

	componentDidMount() {
		axios
			.get('https://cool-beans-api.herokuapp.com/coffees')
			.then(res => {
				this.setState({
					coffees: res.data
				})
			})
			.catch(err => console.log(err))
	}

	handleBody(e) {
		this.setState({
			bodyClicked: true,
			body: e.target.innerHTML
		})

		// this.getCoffees(body)
	}

	handleAcidity(e) {
		this.setState({
			acidityClicked: true,
			acidity: e.target.innerHTML
		})

		// this.getCoffees(acidity)
	}

	getCoffees(flavorProfileProp) {
		let results = this.state.coffees.filter(coffee => {
			let flavorProfile = coffee.flavorProfile[0]

			return flavorProfile.flavorProfileProp === this.state.flavorProfileProp
		})

		console.log(results)

		this.setState({
			discoverResults: results
		})
	}

	render() {
		return (
			<div className="discover">
				{this.state.discoverResults.length > 0 ? (
					<DiscoverResult discoverResults={this.state.discoverResults} />
				) : (
					''
				)}
			</div>
		)
	}
}

export default Discover
