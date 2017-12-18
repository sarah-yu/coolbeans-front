import React, { Component } from 'react'

class FlavorProfile extends Component {
	render() {
		return (
			<div>
				<h3>Flavor Profile:</h3>
				<h4>Body: {this.props.body}</h4>
				<h4>Acidity: {this.props.acidity}</h4>
				<h4>Notes:</h4>
				<ul>
					{this.props.isWeird ? <li>Weird</li> : ''}
					{this.props.isFloral ? <li>Floral</li> : ''}
					{this.props.isSweet ? <li>Sweet</li> : ''}
					{this.props.isNuttyCocoa ? <li>Nutty / Chocolatey</li> : ''}
					{this.props.isSpicy ? <li>Spicy</li> : ''}
					{this.props.isRoasted ? <li>Roasted</li> : ''}
					{this.props.isVeggie ? <li>Earthy / Green</li> : ''}
					{this.props.isSour ? <li>Sour / Fermented</li> : ''}
					{this.props.isFruity ? <li>Fruity</li> : ''}
				</ul>
			</div>
		)
	}
}

export default FlavorProfile
