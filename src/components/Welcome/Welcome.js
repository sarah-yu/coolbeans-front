import React from 'react'
import { Link } from 'react-router-dom'

import './Welcome.css'

const Welcome = () => (
	<div className="welcome">
		<div className="welcome-row">
			<h3> Find a coffee to match your tastes... </h3>
			<Link to="/search">
				<button>Recommend Me Coffees</button>
			</Link>
			<img
				id="welcome-img"
				src="https://i.pinimg.com/736x/93/a8/64/93a8642126dbc3e87899e2154bc1ba03--tumblr-tea-coffee-tumblr.jpg"
			/>
		</div>

		<div className="welcome-row">
			<h3> Learn more about different types of coffee... </h3>
			<Link to="/resources">
				<button>View Learning Resources</button>
			</Link>
			<img
				id="welcome-img"
				src="http://gdruk.com/wp-content/uploads/2016/08/coffee-shop.jpg"
			/>
		</div>

		<div className="welcome-row">
			<h3> See our full coffee bean catalogue </h3>
			<Link to="/resources">
				<button>Show All Coffees</button>
			</Link>
			<img
				id="welcome-img"
				src="http://archive.c4eo.org.uk/themes/vulnerablechildren/eresource/images/vc/frontline/main/bonus4.jpg"
			/>
		</div>
	</div>
)

export default Welcome
