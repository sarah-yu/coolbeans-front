import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class CoffeeList extends Component {
	constructor(props) {
		super(props)

		this.state = {
			coffees: []
		}
	}

	componentDidMount() {
		axios
			.get('http://localhost:3001/coffees')
			.then(response => {
				console.log(response)

				this.setState({
					coffees: response.data
				})

				console.log(this.state.coffees)
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
						<h2>{coffee.name}</h2>
					</Link>
				</div>
			)
		})

		return <div className="coffees">{coffees}</div>
	}
}

export default CoffeeList
