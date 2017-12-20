import React, { Component } from 'react'

import './DiscoverCriteria.css'

class DiscoverCriteria extends Component {
	render() {
		let buttons = this.props.criteria.map((criterion, index) => {
			console.log(this.props.criteria.constructor)
			return (
				<button
					key={index}
					data-notes={Object.values(criterion)}
					className="discover-btn"
					onClick={e => this.props.handleCriteria(e)}
				>
					{Object.keys(criterion)}
				</button>
			)
		})

		return (
			<div className="discover-criteria">
				<h2>{this.props.criteriaName}</h2>
				<div className="discover-criteria-buttons">{buttons}</div>
			</div>
		)
	}
}

export default DiscoverCriteria
