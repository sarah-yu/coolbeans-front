import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class DiscoverResult extends Component {
	render() {
		let coffees = this.props.discoverResults.map((coffee, index) => {
			return (
				<div key={index} className="coffee">
					<Link to={`/coffees/${coffee._id}`}>
						<div className="coffee-img">
							<img src={coffee.imgUrl} alt={coffee.name} />
						</div>
						<h2>{coffee.name}</h2>
					</Link>
				</div>
			)
		})

		return <div className="coffees">{coffees}</div>
	}
}

export default DiscoverResult
