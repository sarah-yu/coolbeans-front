import React from 'react'
import { Link } from 'react-router-dom'

import './Welcome.css'

const Welcome = () => (
	<div className="welcome">
		<div className="welcome-container">
			<h1>Discover new coffees that match your tastes</h1>
			<Link to="/discover">
				<button className="btn">Discover</button>
			</Link>
		</div>
	</div>
)

export default Welcome
