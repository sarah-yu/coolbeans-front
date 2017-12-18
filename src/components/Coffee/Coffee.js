import React, { Component } from 'react'
import axios from 'axios'

import FlavorProfile from '../FlavorProfile/FlavorProfile.js'

class Coffee extends Component {
	constructor() {
		super()

		this.state = {
			name: null,
			region: null,
			country: null,
			imgUrl: null,
			description: null,
			flavorProfile: [],
			id: null,
			acidity: null,
			body: null,

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

		this.deleteCoffee = this.deleteCoffee.bind(this)
	}

	componentDidMount() {
		axios
			.get(`http://localhost:3001/coffees/${this.props.match.params._id}`)
			.then(res => {
				this.setState({
					name: res.data.name,
					region: res.data.region,
					country: res.data.country,
					imgUrl: res.data.imgUrl,
					description: res.data.description,
					flavorProfile: res.data.flavorProfile,
					id: res.data._id,

					isWeird: res.data.flavorProfile.notes.isWeird,
					isFloral: res.data.flavorProfile.notes.isFloral,
					isSweet: res.data.flavorProfile.notes.isSweet,
					isNuttyCocoa: res.data.flavorProfile.notes.isNuttyCocoa,
					isSpicy: res.data.flavorProfile.notes.isSpicy,
					isRoasted: res.data.flavorProfile.notes.isRoasted,
					isVeggie: res.data.flavorProfile.notes.isVeggie,
					isSour: res.data.flavorProfile.notes.isSour,
					isFruity: res.data.flavorProfile.notes.isFruity
				})
			})
			.catch(err => {
				console.log(err)
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

	render() {
		return (
			<div>
				<h1> {this.state.region} </h1>
				<h2> {this.state.name} </h2>
				<img src={this.state.imgUrl} alt={this.state.name} />
				<p> {this.state.description} </p>
				<h4> Flavor Profile Attributes </h4>
				<FlavorProfile
					id={this.state._id}
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
			</div>
		)
	}
}

export default Coffee
