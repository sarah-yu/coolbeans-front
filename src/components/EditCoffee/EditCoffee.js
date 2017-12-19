import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import '../NewCoffee/NewCoffee.css'

class EditCoffee extends Component {
	render() {
		return (
			<div>
				<div className="editProfileForm">
					<h1> Edit this coffee's general details! </h1>
					<form onSubmit={this.props.handleFormSubmit}>
						<p>
							<label>Name: </label>
							<input
								type="text"
								name="name"
								value={this.props.name}
								onChange={this.props.handleNameInput}
							/>
						</p>

						<p>
							<label>Region: </label>
							<input
								type="text"
								name="region"
								value={this.props.region}
								onChange={this.props.handleRegionInput}
							/>
						</p>

						<p>
							<label>Country: </label>
							<input
								type="text"
								name="country"
								value={this.props.country}
								onChange={this.props.handleCountryInput}
							/>
						</p>

						<p>
							<label>Image URL: </label>
							<input
								type="text"
								name="imgUrl"
								value={this.props.imgUrl}
								onChange={this.props.handleImgInput}
							/>
						</p>

						<p>
							<label>Description: </label>
							<input
								type="text"
								name="description"
								value={this.props.description}
								onChange={this.props.handleDescriptionInput}
							/>
						</p>
						<input type="submit" />
					</form>
				</div>

				<div className="editFlavorProfileForm">
					<h1>Edit this coffee's flavor profile!</h1>
					<form>
						<p>
							<label>Fruity: </label>
							<input
								type="checkbox"
								name="isFruity"
								value={this.props.isFruity}
								onChange={this.props.handleFruity}
							/>
						</p>

						<p>
							<label>Sour: </label>
							<input
								type="checkbox"
								name="isSour"
								value={this.props.isSour}
								onChange={this.props.handleSour}
							/>
						</p>

						<p>
							<label>Earthy/Green: </label>
							<input
								type="checkbox"
								name="isVeggie"
								value={this.props.isVeggie}
								onChange={this.props.handleVeggie}
							/>
						</p>

						<p>
							<label>Roasted: </label>
							<input
								type="checkbox"
								name="isRoasted"
								value={this.props.isRoasted}
								onChange={this.props.handleRoasted}
							/>
						</p>

						<p>
							<label>Spicy: </label>
							<input
								type="checkbox"
								name="isSpicy"
								value={this.props.isSpicy}
								onChange={this.props.handleSpicy}
							/>
						</p>

						<p>
							<label>Fruity: </label>
							<input
								type="checkbox"
								name="isFruity"
								value={this.props.isFruity}
								onChange={this.props.handleFruity}
							/>
						</p>

						<p>
							<label>Nutty/Chocolate-y: </label>
							<input
								type="checkbox"
								name="isNuttyCocoa"
								value={this.props.isNuttyCocoa}
								onChange={this.props.handleNuttyCocoa}
							/>
						</p>

						<p>
							<label>Sweet: </label>
							<input
								type="checkbox"
								name="isSweet"
								value={this.props.isSweet}
								onChange={this.props.handleSweet}
							/>
						</p>

						<p>
							<label>Floral: </label>
							<input
								type="checkbox"
								name="isFloral"
								value={this.props.isFloral}
								onChange={this.props.handleFloral}
							/>
						</p>
						<input type="submit" />
					</form>
				</div>
			</div>
		)
	}
}

export default withRouter(EditCoffee)
