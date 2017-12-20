import React, { Component } from 'react'

import './DiscoverCriteria.css'

class DiscoverCriteria extends Component {
	render() {
		let buttons = this.props.criteria.map((criterion, index) => {
			return (
				<button
					key={index}
					className="discover-btn"
					onClick={e => this.props.handleCriteria(e)}
				>
					{criterion}
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
