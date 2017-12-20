import React, { Component } from 'react'
import axios from 'axios'

import './Discover.css'

import DiscoverCriteria from '../DiscoverCriteria/DiscoverCriteria'
import DiscoverResult from '../DiscoverResult/DiscoverResult'

import { getCoffees } from '../../services/coffee'

class Discover extends Component {
	constructor(props) {
		super(props)

		this.state = {
			coffees: [],
			bodyClicked: false,
			acidityClicked: false,
			body: '',
			acidity: '',
			isSpicy: false,
			discoverResults: []
		}

		this.handleBody = this.handleBody.bind(this)
		this.handleAcidity = this.handleAcidity.bind(this)
		this.handleNotes = this.handleNotes.bind(this)
		this.getCoffees = getCoffees.bind(this)
	}

	componentDidMount() {
		this.getCoffees()
	}

	handleBody(e) {
		this.setState(
			{
				bodyClicked: true,
				body: e.target.innerHTML
			},
			this.filterCoffees
		)
	}

	handleAcidity(e) {
		this.setState(
			{
				acidityClicked: true,
				acidity: e.target.innerHTML
			},
			this.filterCoffees
		)
	}

	handleNotes(e) {
		console.log(e.target.dataset.notes)
		if (e.target.innerHTML === 'Spicy') {
			this.setState(
				{
					isSpicy: true
				},
				this.filterCoffees
			)
		}

		if (e.target.style.backgroundColor !== 'red') {
			e.target.style.backgroundColor = 'red'
		} else {
			e.target.style.backgroundColor = 'white'
		}
	}

	filterCoffees() {
		let results = this.state.coffees.filter(coffee => {
			let flavorProfile = coffee.flavorProfile[0]

			if (this.state.isSpicy) {
				return (
					flavorProfile.body === this.state.body &&
					flavorProfile.acidity === this.state.acidity &&
					flavorProfile.notes.isSpicy === this.state.isSpicy
				)
			} else if (this.state.body && this.state.acidity) {
				return (
					flavorProfile.body === this.state.body &&
					flavorProfile.acidity === this.state.acidity
				)
			} else {
				return flavorProfile.body === this.state.body
			}
		})

		this.setState({
			discoverResults: results
		})
	}

	render() {
		const bodyCriteria = [
			{ Light: 'Light' },
			{ Balanced: 'Balanced' },
			{ Full: 'Full' }
		]
		const acidityCriteria = [
			{ Low: 'Low' },
			{ Medium: 'Medium' },
			{ High: 'High' }
		]
		const notesCriteria = [
			{ Fruity: 'isFruity' },
			{ Sour: 'isSour' },
			{ Earthy: 'isVeggie' },
			{ Roasted: 'isRoasted' },
			{ Spicy: 'isSpicy' },
			{ 'Nutty / Chocolatey': 'isNuttyCocoa' },
			{ Sweet: 'isSweet' },
			{ Floral: 'isFloral' },
			{ Weird: 'isWeird' }
		]

		return (
			<div className="discover">
				{this.state.bodyClicked && this.state.acidityClicked ? (
					<DiscoverCriteria
						criteriaName="Notes"
						criteria={notesCriteria}
						handleCriteria={this.handleNotes}
					/>
				) : this.state.bodyClicked ? (
					<DiscoverCriteria
						criteriaName="Acidity"
						criteria={acidityCriteria}
						handleCriteria={this.handleAcidity}
					/>
				) : (
					<DiscoverCriteria
						criteriaName="Body"
						criteria={bodyCriteria}
						handleCriteria={this.handleBody}
					/>
				)}

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
