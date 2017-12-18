import React, { Component } from 'react'
import axios from 'axios'

import FlavorProfile from '../FlavorProfile/FlavorProfile'

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
			isFruity: false
		}

		this.deleteCoffee = this.deleteCoffee.bind(this)
	}

	componentDidMount() {
		axios
			.get(`http://localhost:3001/coffees/${this.props.match.params._id}`)
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
				<img src={this.state.imgUrl} alt={this.state.name} />
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
			</div>
		)
	}
}

export default Coffee
