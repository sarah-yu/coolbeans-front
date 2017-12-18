import React, { Component } from 'react'
import axios from 'axios'

class NewCoffee extends Component {
	constructor(props) {
		super(props)

		this.state = {
			name: null,
			region: null,
			country: null,
			imgUrl: null,
			description: null
		}
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

	handleSubmitInput(e) {
		e.preventDefault()
		console.log(this.state)

		axios
			.post('http://localhost:3001/coffees', this.state)
			.then(response => {
				console.log(response)
				this.props.history.push('/')
			})
			.catch(err => {
				console.log(err)
			})
	}

	render() {
		return (
			<div className="newCoffeeForm">
				<h1>
					We are always looking to expand our palette; add a new coffee below!
				</h1>
				<form onSubmit={e => this.handleSubmitInput(e)}>
					<p>
						<label>Name: </label>
						<input type="text" onChange={e => this.handleNameInput(e)} />
					</p>

					<p>
						<label>Region: </label>
						<input type="text" onChange={e => this.handleRegionInput(e)} />
					</p>

					<p>
						<label>Country: </label>
						<input type="text" onChange={e => this.handleCountryInput(e)} />
					</p>

					<p>
						<label>Image Url: </label>
						<input type="text" onChange={e => this.handleImgInput(e)} />
					</p>

					<p>
						<label>Description: </label>
						<textarea onChange={e => this.handleDescriptionInput(e)} />
					</p>

					<p>
						<input type="submit" />
					</p>
				</form>
			</div>
		)
	}
}

export default NewCoffee
