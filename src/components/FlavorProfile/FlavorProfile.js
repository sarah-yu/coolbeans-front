import React, { Component } from 'react'

class FlavorProfile extends Component {
	render() {
		let profile = this.props.profiles[0]
		return (
			<div>
				<h3>Flavor Profile:</h3>
				<h4>Body: {profile.body}</h4>
				<h4>Acidity: {profile.acidity}</h4>
				<h4>Notes:</h4>
				<ul>
					{profile.notes.isWeird ? <li>Weird</li> : ''}
					{profile.notes.isFloral ? <li>Floral</li> : ''}
					{profile.notes.isSweet ? <li>Sweet</li> : ''}
					{profile.notes.isNuttyCocoa ? <li>Nutty / Chocolatey</li> : ''}
					{profile.notes.isSpicy ? <li>Spicy</li> : ''}
					{profile.notes.isRoasted ? <li>Roasted</li> : ''}
					{profile.notes.isVeggie ? <li>Earthy / Green</li> : ''}
					{profile.notes.isSour ? <li>Sour / Fermented</li> : ''}
					{profile.notes.isFruity ? <li>Fruity</li> : ''}
				</ul>
			</div>
		)
	}
}

export default FlavorProfile
