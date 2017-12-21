import React from 'react'
import { Link } from 'react-router-dom'

import './Welcome.css'

const Welcome = () => (
	<div className="welcome">
		<div className="welcome-row" id="row1">
			<div className="welcome-row-writing">
				<h3 className="welcome-h3"> Find a coffee to match your tastes... </h3>
				<Link to="/discover">
					<button className="btn">Discover</button>
				</Link>
			</div>
			<img
				id="welcome-img"
				src="https://i.pinimg.com/736x/93/a8/64/93a8642126dbc3e87899e2154bc1ba03--tumblr-tea-coffee-tumblr.jpg"
				alt="Discover"
			/>
		</div>

		<div className="welcome-row" id="row2">
			<div className="welcome-row-writing">
				<h3 className="welcome-h3"> Learn about coffee terms... </h3>
				<Link to="/resources">
					<button className="btn">Learn</button>
				</Link>
			</div>
			<img
				className="img2"
				id="welcome-img"
				src="http://gdruk.com/wp-content/uploads/2016/08/coffee-shop.jpg"
				alt="Learn"
			/>
		</div>

		<div className="welcome-row" id="row3">
			<div className="welcome-row-writing">
				<h3 className="welcome-h3"> See our full coffee bean catalogue </h3>
				<Link to="/coffees">
					<button className="btn">Show All</button>
				</Link>
			</div>
			<img
				id="welcome-img"
				src="https://d2zfkpu1r6ym98.cloudfront.net/sites/guideposts.org/files/story/senior_women_laughing_over_coffee_0.jpg"
				alt="Index"
			/>
		</div>
	</div>
)

export default Welcome
