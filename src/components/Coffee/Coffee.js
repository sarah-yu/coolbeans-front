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
			id: null
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
					id: res.data._id
				})
			})
			.catch(err => {
				console.log(err)
			})
	}

	deleteCoffee() {
		axios
			.delete(`http://localhost:3001/coffees/${this.props.match.params._id}`)
			.then(response => {
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
				<button onClick={this.deleteCoffee}>Delete</button>
			</div>
		)
	}
}

export default Coffee
