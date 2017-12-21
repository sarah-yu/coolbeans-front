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
			notesClicked: false,
			body: '',
			acidity: '',
			isFloral: false,
			isFruity: false,
			isNuttyCocoa: false,
			isRoasted: false,
			isSour: false,
			isSpicy: false,
			isSweet: false,
			isVeggie: false,
			isWeird: false,
			acidityBodyChoice: [],
			findNotes: [],
			tempResults: [], // results from body and acidity filter
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
		// this.state.findNotes.push(e.target.dataset.notes)

		// this.setState(
		// 	{
		// 		[e.target.dataset.notes]: true
		// 	},
		// 	this.filterCoffeesByNotes
		// )

		let selectedNote = e.target.dataset.notes

		if (e.target.style.backgroundColor !== 'skyblue') {
			e.target.style.backgroundColor = 'skyblue'

			if (this.state.findNotes.indexOf(selectedNote) < 0) {
				this.state.findNotes.push(selectedNote)
			}

			this.setState(
				{
					[selectedNote]: true
				},
				this.filterCoffeesByNotes
			)
		} else {
			e.target.style.backgroundColor = '#ffffff'

			this.state.findNotes.splice(this.state.findNotes.indexOf(selectedNote), 1)

			this.setState(
				{
					[selectedNote]: false
				},
				this.filterCoffeesByNotes
			)
		}
	}

	filterCoffeesByNotes() {
		console.log(this.state.findNotes)
		// console.log('filtering by notes')
		// console.log(this.state.discoverResults)

		let results = []

		console.log(this.state.tempResults)

		for (let i = 0; i < this.state.tempResults.length; i++) {
			let coffee = this.state.tempResults[i]
			let matchNotes = 0
			for (let j = 0; j < this.state.findNotes.length; j++) {
				let note = this.state.findNotes[j]

				let flavorProfile = coffee.flavorProfile[0]

				if (flavorProfile.notes[note]) {
					matchNotes++
					// results.push(coffee)
				}
			}

			if (matchNotes === this.state.findNotes.length) {
				results.push(coffee)
			}
		}

		console.log('RESULTS')
		console.log(results)

		this.setState({
			discoverResults: results
		})
	}

	filterCoffees() {
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

		this.setState({
			tempResults: results,
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
				{this.state.bodyClicked ? (
					<div id="prev-choices">
						<h3> Previous Choices </h3>
						<p> {this.state.body} Body </p>
						{this.state.acidityClicked ? (
							<p> {this.state.acidity} Acidity </p>
						) : (
							''
						)}
					</div>
				) : (
					''
				)}
				{this.state.bodyClicked && this.state.acidityClicked ? (
					<DiscoverCriteria
						criteriaName="Choose some flavor notes!"
						criteria={notesCriteria}
						handleCriteria={this.handleNotes}
					/>
				) : this.state.bodyClicked ? (
					<DiscoverCriteria
						criteriaName="How much acidity do you like?"
						criteria={acidityCriteria}
						handleCriteria={this.handleAcidity}
					/>
				) : (
					<DiscoverCriteria
						criteriaName="What kind of body should your coffee have?"
						criteria={bodyCriteria}
						handleCriteria={this.handleBody}
					/>
				)}

				{this.state.tempResults.length > 0 ? (
					<DiscoverResult discoverResults={this.state.discoverResults} />
				) : (
					''
				)}
			</div>
		)
	}
}

export default Discover
