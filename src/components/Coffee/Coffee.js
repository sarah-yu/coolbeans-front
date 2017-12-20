import React, { Component } from 'react'
import axios from 'axios'

import FlavorProfile from '../FlavorProfile/FlavorProfile'
import EditCoffee from '../EditCoffee/EditCoffee'

class Coffee extends Component {
	constructor() {
		super()

		this.state = {
			id: '',
			name: '',
			region: '',
			country: '',
			imgUrl: '',
			description: '',

			acidity: '',
			body: '',
			isWeird: false,
			isFloral: false,
			isSweet: false,
			isNuttyCocoa: false,
			isSpicy: false,
			isRoasted: false,
			isVeggie: false,
			isSour: false,
			isFruity: false,

			editClicked: false
		}

		this.deleteCoffee = this.deleteCoffee.bind(this)
		this.editCoffee = this.editCoffee.bind(this)

		this.handleNameInput = this.handleNameInput.bind(this)
		this.handleRegionInput = this.handleRegionInput.bind(this)
		this.handleCountryInput = this.handleCountryInput.bind(this)
		this.handleDescriptionInput = this.handleDescriptionInput.bind(this)
		this.handleImgInput = this.handleImgInput.bind(this)

		this.handleBody = this.handleBody.bind(this)
		this.handleAcidity = this.handleAcidity.bind(this)
		this.handleFruity = this.handleFruity.bind(this)
		this.handleSour = this.handleSour.bind(this)
		this.handleVeggie = this.handleVeggie.bind(this)
		this.handleRoasted = this.handleRoasted.bind(this)
		this.handleNuttyCocoa = this.handleNuttyCocoa.bind(this)
		this.handleSpicy = this.handleSpicy.bind(this)
		this.handleSweet = this.handleSweet.bind(this)
		this.handleFloral = this.handleFloral.bind(this)
		this.handleWeird = this.handleWeird.bind(this)

		this.handleFormSubmit = this.handleFormSubmit.bind(this)
	}

	componentDidMount() {
		axios
			.get(
				`https://cool-beans-api.herokuapp.com/coffees/${this.props.match.params
					._id}`
			)
			.then(res => {
				console.log(res.data)

				let flavorProfile = res.data.flavorProfile[0]

				this.setState({
					id: res.data._id,
					name: res.data.name,
					region: res.data.region,
					country: res.data.country,
					imgUrl: res.data.imgUrl,
					description: res.data.description,

					acidity: flavorProfile.acidity,
					body: flavorProfile.body,
					isWeird: flavorProfile.notes.isWeird,
					isFloral: flavorProfile.notes.isFloral,
					isSweet: flavorProfile.notes.isSweet,
					isNuttyCocoa: flavorProfile.notes.isNuttyCocoa,
					isSpicy: flavorProfile.notes.isSpicy,
					isRoasted: flavorProfile.notes.isRoasted,
					isVeggie: flavorProfile.notes.isVeggie,
					isSour: flavorProfile.notes.isSour,
					isFruity: flavorProfile.notes.isFruity
				})
			})
			.catch(err => {
				console.log(err)
			})
	}

	handleNameInput(e) {
		this.setState({
			name: e.target.value
		})
	}

	handleRegionInput(e) {
		this.setState({
			region: e.target.value
		})
	}

	handleCountryInput(e) {
		this.setState({
			country: e.target.value
		})
	}

	handleImgInput(e) {
		this.setState({
			imgUrl: e.target.value
		})
	}

	handleDescriptionInput(e) {
		this.setState({
			description: e.target.value
		})
	}

	handleBody(e) {
		this.setState({
			body: e.target.value
		})
	}

	handleAcidity(e) {
		this.setState({
			acidity: e.target.value
		})
	}

	handleFruity(e) {
		this.setState({
			isFruity: e.target.checked
		})
	}

	handleSour(e) {
		this.setState({
			isSour: e.target.checked
		})
	}

	handleVeggie(e) {
		this.setState({
			isVeggie: e.target.checked
		})
	}

	handleRoasted(e) {
		this.setState({
			isRoasted: e.target.checked
		})
	}

	handleSpicy(e) {
		this.setState({
			isSpicy: e.target.checked
		})
	}

	handleNuttyCocoa(e) {
		this.setState({
			isNuttyCocoa: e.target.checked
		})
	}

	handleSweet(e) {
		this.setState({
			isSweet: e.target.checked
		})
	}

	handleFloral(e) {
		this.setState({
			isFloral: e.target.checked
		})
	}

	handleWeird(e) {
		this.setState({
			isWeird: e.target.checked
		})
	}

	handleFormSubmit(e) {
		e.preventDefault()
		console.log('form was submitted')

		axios
			.put(`http://localhost:3001/coffees/${this.state._id}`, {
				name: this.state.name,
				region: this.state.region,
				country: this.state.country,
				imgUrl: this.state.imgUrl,
				description: this.state.description,

				acidity: this.state.acidity,
				body: this.state.body,
				isWeird: this.state.isWeird,
				isFloral: this.state.isFloral,
				isSweet: this.state.isSweet,
				isNuttyCocoa: this.state.isNuttyCocoa,
				isSpicy: this.state.isSpicy,
				isRoasted: this.state.isRoasted,
				isVeggie: this.state.isVeggie,
				isSour: this.state.isSour,
				isFruity: this.state.isFruity
			})
			.then(response => {
				console.log(response)
				this.props.history.push(`/coffees/${response._id}`)
				console.log('Updated!')
			})
			.catch(err => console.log(err))

		this.setState({
			editClicked: false
		})
	}

	deleteCoffee() {
		axios
			.delete(`http://localhost:3001/coffees/${this.props.match.params._id}`)
			.then(res => {
				console.log(`${this.state.name} coffee was deleted.`)
				this.props.history.push('/coffees')
			})
			.catch(err => console.log(err))
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
					<img src={this.state.imgUrl} alt={this.state.name} />
				</div>
				<h2>Country: {this.state.country}</h2>
				<h3>Region: {this.state.region}</h3>
				<p>Description: {this.state.description}</p>
				<FlavorProfile
					acidity={this.state.acidity}
					body={this.state.body}
					isWeird={this.state.isWeird}
					isFloral={this.state.isFloral}
					isSweet={this.state.isSweet}
					isNuttyCocoa={this.state.isNuttyCocoa}
					isSpicy={this.state.isSpicy}
					isRoasted={this.state.isRoasted}
					isVeggie={this.state.isVeggie}
					isSour={this.state.isSour}
					isFruity={this.state.isFruity}
				/>
				<button onClick={this.deleteCoffee}>Delete</button>
				<button onClick={this.editCoffee}>Edit</button>
				{this.state.editClicked ? (
					<div className="edit-coffee">
						<EditCoffee
							name={this.state.name}
							region={this.state.region}
							country={this.state.country}
							imgUrl={this.state.imgUrl}
							description={this.state.description}
							handleNameInput={this.handleNameInput}
							handleImgInput={this.handleImgInput}
							handleRegionInput={this.handleRegionInput}
							handleCountryInput={this.handleCountryInput}
							handleDescriptionInput={this.handleDescriptionInput}
							acidity={this.state.acidity}
							body={this.state.body}
							isWeird={this.state.isWeird}
							isFloral={this.state.isFloral}
							isSweet={this.state.isSweet}
							isNuttyCocoa={this.state.isNuttyCocoa}
							isSpicy={this.state.isSpicy}
							isRoasted={this.state.isRoasted}
							isVeggie={this.state.isVeggie}
							isSour={this.state.isSour}
							isFruity={this.state.isFruity}
							handleBody={this.handleBody}
							handleAcidity={this.handleAcidity}
							handleSour={this.handleSour}
							handleSweet={this.handleSweet}
							handleSpicy={this.handleSpicy}
							handleWeird={this.handleWeird}
							handleFloral={this.handleFloral}
							handleNuttyCocoa={this.handleNuttyCocoa}
							handleFruity={this.handleFruity}
							handleRoasted={this.handleRoasted}
							handleVeggie={this.handleVeggie}
							handleFormSubmit={this.handleFormSubmit}
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
