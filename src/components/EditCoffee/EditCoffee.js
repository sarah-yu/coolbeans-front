import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import '../NewCoffee/NewCoffee.css'
import Coffee from '../Coffee/Coffee'

class EditCoffee extends Component {
	render() {
		return (
			<div className="form-container">
				<h2>Edit this coffee's general details!</h2>

				<div className="the-form">
					<form onSubmit={this.props.handleFormSubmit}>
						<div className="form-sides">
							<div className="form-left">
								<div className="form-section">
									<label className="form-section-heading">Coffee</label>
								</div>
								<div className="form-section">
									<label>Name: </label>
									<input
										type="text"
										name="name"
										value={this.props.name}
										className="form-field"
										onChange={this.props.handleNameInput}
									/>
								</div>

								<div className="form-section">
									<label>Region: </label>
									<input
										type="text"
										name="region"
										value={this.props.region}
										className="form-field"
										onChange={this.props.handleRegionInput}
									/>
								</div>

								<div className="form-section">
									<label>Country: </label>
									<input
										type="text"
										name="country"
										value={this.props.country}
										className="form-field"
										onChange={this.props.handleCountryInput}
									/>
								</div>

								<div className="form-section">
									<label>Image URL: </label>
									<input
										type="text"
										name="imgUrl"
										value={this.props.imgUrl}
										className="form-field"
										onChange={this.props.handleImgInput}
									/>
								</div>

								<div className="form-section">
									<label>Description: </label>
									<textarea
										name="description"
										value={this.props.description}
										onChange={this.props.handleDescriptionInput}
									/>
								</div>
							</div>

							<div className="form-right">
								<div className="form-section">
									<label className="form-section-heading">Flavor Profile</label>
								</div>

								<div className="form-section">
									<label>Body: </label>
									<input
										type="text"
										name="body"
										className="form-field"
										value={this.props.body}
										onChange={this.props.handleBody}
									/>
								</div>

								<div className="form-section">
									<label>Acidity: </label>
									<input
										type="text"
										name="acidity"
										className="form-field"
										value={this.props.acidity}
										onChange={this.props.handleAcidity}
									/>
								</div>

								<div className="form-section">
									<input
										type="checkbox"
										name="isFruity"
										value={this.props.isFruity}
										onChange={this.props.handleFruity}
									/>{' '}
									Fruity<br />
									<input
										type="checkbox"
										name="isSour"
										value={this.props.isSour}
										onChange={this.props.handleSour}
									/>{' '}
									Sour/Fermented<br />
									<input
										type="checkbox"
										name="isVeggie"
										value={this.props.isVeggie}
										onChange={this.props.handleVeggie}
									/>{' '}
									Earthy/ Green <br />
									<input
										type="checkbox"
										name="isRoasted"
										value={this.props.isRoasted}
										onChange={this.props.handleRoasted}
									/>{' '}
									Roasted<br />
									<input
										type="checkbox"
										name="isSpicy"
										value={this.props.isSpicy}
										onChange={this.props.handleSpicy}
									/>{' '}
									Spicy<br />
									<input
										type="checkbox"
										name="isNuttyCocoa"
										value={this.props.isNuttyCocoa}
										onChange={this.props.handleNuttyCocoa}
									/>{' '}
									Nutty/Chocolate-y<br />
									<input
										type="checkbox"
										name="isSweet"
										value={this.props.isSweet}
										onChange={this.props.handleSweet}
									/>{' '}
									Sweet<br />
									<input
										type="checkbox"
										name="isFloral"
										value={this.props.isFloral}
										onChange={this.props.handleFloral}
									/>{' '}
									Floral<br />
									<input
										type="checkbox"
										name="isWeird"
										value={this.props.isWeird}
										onChange={this.props.handleWeird}
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

export default withRouter(EditCoffee)
