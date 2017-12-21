import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './DiscoverCriteria.css'

class DiscoverCriteria extends Component {
	render() {
		let buttons = this.props.criteria.map((criterion, index) => {
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

DiscoverCriteria.propTypes = {
	criteriaName: PropTypes.string.isRequired,
	criteria: PropTypes.array.isRequired,
	handleCriteria: PropTypes.func.isRequired
}

export default DiscoverCriteria
