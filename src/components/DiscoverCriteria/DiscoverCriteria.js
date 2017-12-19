import React, { Component } from 'react'

import './DiscoverCriteria.css'

class DiscoverCriteria extends Component {
	render() {
		let buttons = this.props.criteria.forEach(criterion => {
			return (
				<button
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
				{buttons}
			</div>
		)
	}
}

export default DiscoverCriteria
