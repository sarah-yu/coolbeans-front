import React from 'react'
import { Link } from 'react-router-dom'

import './Header.css'

const Header = () => (
	<header>
		<Link to="/">
			<img
				className="logo"
				src="https://i.imgur.com/Xawn3K0.png"
				alt="Coolbeans Logo"
			/>
		</Link>
		<nav>
			<Link to="/">Home</Link>
			<Link to="/resources">Learn</Link>
			<Link to="/coffees">Show All Coffees</Link>
			<Link to="/search">Discover</Link>
			<Link to="/new-coffee">Add a New Coffee</Link>
		</nav>
	</header>
)

export default Header
