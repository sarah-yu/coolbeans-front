import React, { Component } from 'react'
import axios from 'axios'

import DiscoverCriteria from '../DiscoverCriteria/DiscoverCriteria'
import DiscoverResult from '../DiscoverResult/DiscoverResult'

class Discover extends Component {
	constructor(props) {
		super(props)

		this.state = {
			coffees: [],
			bodyClicked: false,
			acidityClicked: false,
			body: '',
			acidity: '',
			discoverResults: []
		}

		this.handleBody = this.handleBody.bind(this)
		this.handleAcidity = this.handleAcidity.bind(this)
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
		this.setState(
			{
				bodyClicked: true,
				body: e.target.innerHTML
			},
			this.getCoffees
		)
	}

	handleAcidity(e) {
		this.setState(
			{
				acidityClicked: true,
				acidity: e.target.innerHTML
			},
			this.getCoffees
		)
	}

	getCoffees() {
		let results = this.state.coffees.filter(coffee => {
			let flavorProfile = coffee.flavorProfile[0]

			if (this.state.body && this.state.acidity) {
				return (
					flavorProfile.body === this.state.body &&
					flavorProfile.acidity === this.state.acidity
				)
			} else {
				return flavorProfile.body === this.state.body
			}
		})

		console.log(this.state.body)
		console.log(this.state.acidity)
		console.log(results)

		this.setState({
			discoverResults: results
		})
	}

	render() {
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

		return (
			<div className="discover">
				<DiscoverCriteria
					criteriaName="Body"
					criteria={bodyCriteria}
					handleCriteria={this.handleBody}
				/>

				<DiscoverCriteria
					criteriaName="Acidity"
					criteria={acidityCriteria}
					handleCriteria={this.handleAcidity}
				/>

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
