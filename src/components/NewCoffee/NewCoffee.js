import React, { Component } from 'react'

import './NewCoffee.css'

import { createCoffee } from '../../services/coffee'

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

		this.createCoffee = createCoffee.bind(this)
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

		this.createCoffee(newCoffee)
	}

	render() {
		return (
			<div className="form-container">
				<h2>
					We are always looking to expand our palette; add a new coffee below!
				</h2>

				<div className="the-form">
					<form onSubmit={e => this.handleSubmitInput(e)}>
						<div className="form-sides">
							<div className="form-left">
								<div className="form-section">
									<label className="form-section-heading">Coffee</label>
								</div>
								<div className="form-section">
									<label>Name:</label>
									<br />
									<input
										type="text"
										name="name"
										className="form-field"
										onChange={e => this.handleNameInput(e)}
									/>
								</div>

								<div className="form-section">
									<label>Region:</label>
									<br />
									<input
										type="text"
										name="region"
										className="form-field"
										onChange={e => this.handleRegionInput(e)}
									/>
								</div>

								<div className="form-section">
									<label>Country:</label>
									<br />
									<input
										type="text"
										name="country"
										className="form-field"
										onChange={e => this.handleCountryInput(e)}
									/>
								</div>

								<div className="form-section">
									<label>Image Url:</label>
									<br />
									<input
										type="text"
										name="imageUrl"
										className="form-field"
										onChange={e => this.handleImgInput(e)}
									/>
								</div>

								<div className="form-section">
									<label>Description:</label>
									<br />
									<textarea
										name="description"
										className="form-field"
										onChange={e => this.handleDescriptionInput(e)}
									/>
								</div>
							</div>

							<div className="form-right">
								<div className="form-section">
									<label className="form-section-heading">Flavor Profile</label>
								</div>

								<div className="form-section">
									<label>Body:</label>
									<br />
									<input
										type="text"
										name="body"
										className="form-field"
										placeholder="Light, Balanced, or Full"
										onChange={e => this.handleBody(e)}
									/>
								</div>

								<div className="form-section">
									<label>Acidity:</label>
									<br />
									<input
										type="text"
										name="acidity"
										className="form-field"
										placeholder="Low, Medium, or High"
										onChange={e => this.handleAcidity(e)}
									/>
								</div>

								<div className="form-section">
									<label>Notes:</label>
								</div>

								<div className="form-section">
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
								</div>
							</div>
						</div>
						<div className="form-section form-submit-btn">
							<input type="submit" className="btn" />
						</div>
					</form>
				</div>
			</div>
		)
	}
}

export default NewCoffee
