import React from 'react'
import { Link } from 'react-router-dom'

import './Header.css'

const Header = () => (
	<header>
		<Link to="/">
			<h1>Coffee Logo</h1>
		</Link>
		<nav>
			<Link to="/">Home</Link>
			<Link to="/resources">Resources</Link>
			<Link to="/coffees">View Coffees</Link>
			<Link to="/search">Search</Link>
			<Link to="/new-coffee">New Coffee</Link>
		</nav>
	</header>
)

export default Header
