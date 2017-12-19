import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class SearchResult extends Component {
	render() {
		let coffees = this.props.searchResults.map((coffee, index) => {
			return (
				<div key={index} className="coffee">
					<Link to={`/coffees/${coffee._id}`}>
						<div className="coffee-img">
							<img src={coffee.imgUrl} alt={coffee.name} />
						</div>
						<h2>{coffee.name}</h2>

						<span className="coffee-notes">
							{coffee.flavorProfile[0].notes.isFruity ? 'Fruity ' : ''}
							{coffee.flavorProfile[0].notes.isSour ? 'Sour ' : ''}
							{coffee.flavorProfile[0].notes.isVeggie ? 'Earthy ' : ''}
							{coffee.flavorProfile[0].notes.isRoasted ? 'Roasted ' : ''}
							{coffee.flavorProfile[0].notes.isSpicy ? 'Spicy ' : ''}
							{coffee.flavorProfile[0].notes.isNuttyCocoa
								? 'Nutty / Chocolatey '
								: ''}
							{coffee.flavorProfile[0].notes.isSweet ? 'Sweet ' : ''}
							{coffee.flavorProfile[0].notes.isFloral ? 'Floral ' : ''}
							{coffee.flavorProfile[0].notes.isWeird ? 'Weird ' : ''}
						</span>
					</Link>
				</div>
			)
		})

		return <div className="coffees">{coffees}</div>
	}
}

export default SearchResult
