import React, { Component } from 'react'
import axios from 'axios'

class FlavorProfile extends Component {
	constructor() {
		super()
		this.state = {
			body: null,
			acidity: null,
			notes: []
		}
	}
	componentDidMount() {
		axios
			.get('http://localhost:3001/coffees')
			.then(res => {
				this.setState({
					body: res.data.body,
					acidity: res.data.acidity,
					notes: res.data.notes
				})
			})
			.catch(err => {
				console.log(err)
			})
	}

	render() {
		return (
			<div>
				<div className="flavor-profile-body">
					<div className="flavor-profile-tag"> {this.state.body} body </div>
				</div>
				<div className="flavor-profile-acidity">
					<div className="flavor-profile-tag">{this.state.acidity} acidity</div>
				</div>
				<div className="flavor-profile-notes">
					{this.state.notes.isFruity ? (
						<div className="flavor-profile-tag"> Fruity </div>
					) : (
						<div />
					)}
				</div>
			</div>
		)
	}
}

export default FlavorProfile
