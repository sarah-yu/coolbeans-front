import React from 'react'
import { Link } from 'react-router-dom'

import './Welcome.css'

const Welcome = () => (
	<section className="welcome">
		<h1>Welcome to Cool Beans! Click a link to get started:</h1>
		<nav className="welcome-nav">
			<ul>
				<li>
					<Link to="/resources">Resources</Link> - Learn more about coffee
					terminology and how we categorize our coffees
				</li>
				<li>
					<Link to="/coffees">View Coffees</Link> - See all the coffees
				</li>
				<li>
					<Link to="/search">Search Coffees</Link> - Get coffee recommendations
				</li>
			</ul>
		</nav>
	</section>
)

export default Welcome
