import React, { Component } from 'react'
import axios from 'axios'

class NewCoffee extends Component {
	constructor(props) {
		super(props)

		this.state = {
			// coffee
			name: '',
			region: '',
			country: '',
			imgUrl: '',
			description: '',

			// flavor profile
			body: '',
			acidity: '',
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

	handleSubmitInput(e) {
		e.preventDefault()

		console.log(this.state)

		let newFlavorProfile = {
			body: this.state.body,
			acidity: this.state.acidity,
			notes: {
				isFruity: this.state.isFruity,
				isSour: this.state.isSour,
				isVeggie: this.state.isVeggie,
				isRoasted: this.state.isRoasted,
				isSpicy: this.state.isSpicy,
				isNuttyCocoa: this.state.isNuttyCocoa,
				isSweet: this.state.isSweet,
				isFloral: this.state.isFloral,
				isWeird: this.state.isWeird
			}
		}

		let newCoffee = {
			name: this.state.name,
			region: this.state.region,
			country: this.state.country,
			imgUrl: this.state.imgUrl,
			description: this.state.description,
			flavorProfile: [newFlavorProfile]
		}

		axios
			.post('http://localhost:3001/coffees', newCoffee)
			.then(response => {
				console.log(response)
				this.props.history.push('/coffees')
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
						<label>Name:</label>
						<br />
						<input
							type="text"
							name="name"
							onChange={e => this.handleNameInput(e)}
						/>
					</p>

					<p>
						<label>Region:</label>
						<br />
						<input
							type="text"
							name="region"
							onChange={e => this.handleRegionInput(e)}
						/>
					</p>

					<p>
						<label>Country:</label>
						<br />
						<input
							type="text"
							name="country"
							onChange={e => this.handleCountryInput(e)}
						/>
					</p>

					<p>
						<label>Image Url:</label>
						<br />
						<input
							type="text"
							name="imageUrl"
							onChange={e => this.handleImgInput(e)}
						/>
					</p>

					<p>
						<label>Description:</label>
						<br />
						<textarea
							name="description"
							onChange={e => this.handleDescriptionInput(e)}
						/>
					</p>

					<p>
						<label>Flavor Profile</label>
					</p>

					<p>
						<label>Body:</label>
						<br />
						<input
							type="text"
							name="body"
							placeholder="Light, Balanced, or Full"
							onChange={e => this.handleBody(e)}
						/>
					</p>

					<p>
						<label>Acidity:</label>
						<br />
						<input
							type="text"
							name="acidity"
							placeholder="Low, Medium, or High"
							onChange={e => this.handleAcidity(e)}
						/>
					</p>

					<p>
						<label>Notes</label>
					</p>

					<p>
						<input
							type="checkbox"
							name="isFruity"
							onChange={e => this.handleFruity(e)}
						/>{' '}
						Fruity<br />
						<input
							type="checkbox"
							name="isSour"
							onChange={e => this.handleSour(e)}
						/>{' '}
						Sour / Fermented<br />
						<input
							type="checkbox"
							name="isVeggie"
							onChange={e => this.handleVeggie(e)}
						/>{' '}
						Earthy / Green<br />
						<input
							type="checkbox"
							name="isRoasted"
							onChange={e => this.handleRoasted(e)}
						/>{' '}
						Roasted<br />
						<input
							type="checkbox"
							name="isSpicy"
							onChange={e => this.handleSpicy(e)}
						/>{' '}
						Spicy<br />
						<input
							type="checkbox"
							name="isNuttyCocoa"
							onChange={e => this.handleNuttyCocoa(e)}
						/>{' '}
						Nutty / Chocolatey<br />
						<input
							type="checkbox"
							name="isSweet"
							onChange={e => this.handleSweet(e)}
						/>{' '}
						Sweet<br />
						<input
							type="checkbox"
							name="isFloral"
							onChange={e => this.handleFloral(e)}
						/>{' '}
						Floral<br />
						<input
							type="checkbox"
							name="isWeird"
							onChange={e => this.handleWeird(e)}
						/>{' '}
						Weird<br />
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
