import React, { Component } from 'react'
import axios from 'axios'

import FlavorProfile from '../FlavorProfile/FlavorProfile'
import EditCoffee from '../EditCoffee/EditCoffee'

import './Coffee.css'

import { getCoffee, removeCoffee, updateCoffee } from '../../services/coffee'

class Coffee extends Component {
	constructor() {
		super()

		this.state = {
			coffee: {
				name: '',
				region: '',
				country: '',
				imgUrl: '',
				description: '',
				flavorProfile: [
					{
						acidity: '',
						body: '',
						notes: {
							isWeird: false,
							isFloral: false,
							isSweet: false,
							isNuttyCocoa: false,
							isSpicy: false,
							isRoasted: false,
							isVeggie: false,
							isSour: false,
							isFruity: false
						}
					}
				]
			},
			editClicked: false
		}

		this.deleteCoffee = this.deleteCoffee.bind(this)
		this.editCoffee = this.editCoffee.bind(this)

		this.amendCoffee = this.amendCoffee.bind(this)
		this.updateCoffeeProfile = this.updateCoffeeProfile.bind(this)
		this.updateCoffeeProfileNotes = this.updateCoffeeProfileNotes.bind(this)

		this.handleFormSubmit = this.handleFormSubmit.bind(this)

		this.getCoffee = getCoffee.bind(this)
		this.removeCoffee = removeCoffee.bind(this)
		this.updateCoffee = updateCoffee.bind(this)
	}

	componentDidMount() {
		this.getCoffee(this.props.match.params._id)
	}

	amendCoffee(e) {
		this.setState({
			coffee: {
				...this.state.coffee,
				[e.target.name]: e.target.value
			}
		})
	}

	updateCoffeeProfile(e) {
		let flavorProfile = this.state.coffee.flavorProfile[0]
		this.setState({
			coffee: {
				...this.state.coffee,
				flavorProfile: [
					{
						...flavorProfile,
						[e.target.name]: e.target.value
					}
				]
			}
		})
	}

	updateCoffeeProfileNotes(e) {
		let notes = this.state.coffee.flavorProfile[0].notes
		console.log(notes)
		this.setState({
			coffee: {
				...this.state.coffee,
				flavorProfile: [
					{
						...this.state.flavorProfile,
						notes: {
							...notes,
							[e.target.name]: e.target.value
						}
					}
				]
			}
		})
		console.log(notes)
	}

	handleFormSubmit(e) {
		e.preventDefault()
		console.log(this.state.coffee)
		console.log('form was submitted')

		this.updateCoffee()

		this.setState({
			editClicked: false
		})
	}

	deleteCoffee() {
		this.removeCoffee(this.props.match.params._id)
	}

	editCoffee() {
		this.setState({
			editClicked: !this.state.editClicked
		})
	}

	render() {
		return (
			<div>
				<div className="coffee-img">
					<img src={this.state.coffee.imgUrl} alt={this.state.coffee.name} />
				</div>
				<h2>{this.state.coffee.name}</h2>
				<h3>Region: {this.state.coffee.region}</h3>
				<p> {this.state.coffee.description}</p>
				<FlavorProfile profiles={this.state.coffee.flavorProfile} />
				<div className="edit-delete-coffee-btns">
					<button onClick={this.deleteCoffee}>Delete</button>
					<button onClick={this.editCoffee}>Edit</button>
				</div>
				{this.state.editClicked ? (
					<div className="edit-coffee">
						<EditCoffee
							coffee={this.state.coffee}
							handleFormSubmit={this.handleFormSubmit}
							amendCoffee={this.amendCoffee}
							updateCoffeeProfile={this.updateCoffeeProfile}
							updateCoffeeProfileNotes={this.updateCoffeeProfileNotes}
						/>
					</div>
				) : (
					''
				)}
			</div>
		)
	}
}

export default Coffee
