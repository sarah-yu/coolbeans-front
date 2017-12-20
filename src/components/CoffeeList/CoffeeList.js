import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import './CoffeeList.css'

class CoffeeList extends Component {
	constructor(props) {
		super(props)

		this.state = {
			coffees: []
		}
	}

	componentDidMount() {
		axios
			.get('https://cool-beans-api.herokuapp.com/coffees')
			.then(response => {
				this.setState({
					coffees: response.data
				})
			})
			.catch(err => {
				console.log(err)
			})
	}

	render() {
		let coffees = this.state.coffees.map((coffee, index) => {
			return (
				<div key={index} className="coffee">
					<Link to={`/coffees/${coffee._id}`}>
						<div className="coffee-img">
							<img src={coffee.imgUrl} alt={coffee.name} />
						</div>
						<h2>
							{coffee.name}{' '}
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
						</h2>
					</Link>
				</div>
			)
		})

		return <div className="coffees">{coffees}</div>
	}
}

export default CoffeeList
