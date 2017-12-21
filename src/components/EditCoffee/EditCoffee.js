import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import '../NewCoffee/NewCoffee.css'

class EditCoffee extends Component {
	render() {
		let { coffee } = this.props
		let flavorProfile = coffee.flavorProfile[0]
		let notes = flavorProfile.notes
		return (
			<div className="form-container">
				<h2>Edit coffee details</h2>

				<div className="the-form">
					<form onSubmit={this.props.handleFormSubmit}>
						<div className="form-sides">
							<div className="form-left">
								<div className="form-section">
									<label className="form-section-heading">Coffee</label>
								</div>
								<div className="form-section">
									<label>Name: </label>
									<br />
									<input
										type="text"
										name="name"
										value={coffee.name}
										className="form-field"
										onChange={this.props.amendCoffee}
									/>
								</div>

								<div className="form-section">
									<label>Region: </label>
									<br />
									<input
										type="text"
										name="region"
										value={coffee.region}
										className="form-field"
										onChange={this.props.amendCoffee}
									/>
								</div>

								<div className="form-section">
									<label>Country: </label>
									<br />
									<input
										type="text"
										name="country"
										value={coffee.country}
										className="form-field"
										onChange={this.props.amendCoffee}
									/>
								</div>

								<div className="form-section">
									<label>Image URL: </label>
									<br />
									<input
										type="text"
										name="imgUrl"
										value={coffee.imgUrl}
										className="form-field"
										onChange={this.props.amendCoffee}
									/>
								</div>

								<div className="form-section">
									<label>Description: </label>
									<br />
									<textarea
										name="description"
										className="form-field"
										value={coffee.description}
										onChange={this.props.amendCoffee}
									/>
								</div>
							</div>

							<div className="form-right">
								<div className="form-section">
									<label className="form-section-heading">Flavor Profile</label>
								</div>

								<div className="form-section">
									<label>Body: </label>
									<br />
									<input
										type="text"
										name="body"
										className="form-field"
										value={flavorProfile.body}
										onChange={this.props.updateCoffeeProfile}
									/>
								</div>

								<div className="form-section">
									<label>Acidity: </label>
									<br />
									<input
										type="text"
										name="acidity"
										className="form-field"
										value={flavorProfile.acidity}
										onChange={this.props.updateCoffeeProfile}
									/>
								</div>

								<div className="form-section">
									<label>Notes:</label>
								</div>

								<div className="form-section">
									<input
										type="checkbox"
										name="isFruity"
										value={notes.isFruity}
										onChange={this.props.updateCoffeeProfileNotes}
									/>{' '}
									Fruity<br />
									<input
										type="checkbox"
										name="isSour"
										value={notes.isSour}
										onChange={this.props.updateCoffeeProfileNotes}
									/>{' '}
									Sour/Fermented<br />
									<input
										type="checkbox"
										name="isVeggie"
										value={notes.isVeggie}
										onChange={this.props.updateCoffeeProfileNotes}
									/>{' '}
									Earthy/ Green <br />
									<input
										type="checkbox"
										name="isRoasted"
										value={notes.isRoasted}
										onChange={this.props.updateCoffeeProfileNotes}
									/>{' '}
									Roasted<br />
									<input
										type="checkbox"
										name="isSpicy"
										value={notes.isSpicy}
										onChange={this.props.updateCoffeeProfileNotes}
									/>{' '}
									Spicy<br />
									<input
										type="checkbox"
										name="isNuttyCocoa"
										value={notes.isNuttyCocoa}
										onChange={this.props.updateCoffeeProfileNotes}
									/>{' '}
									Nutty/Chocolate-y<br />
									<input
										type="checkbox"
										name="isSweet"
										value={notes.isSweet}
										onChange={this.props.updateCoffeeProfileNotes}
									/>{' '}
									Sweet<br />
									<input
										type="checkbox"
										name="isFloral"
										value={notes.isFloral}
										onChange={this.props.updateCoffeeProfileNotes}
									/>{' '}
									Floral<br />
									<input
										type="checkbox"
										name="isWeird"
										value={notes.isWeird}
										onChange={this.props.updateCoffeeProfileNotes}
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
