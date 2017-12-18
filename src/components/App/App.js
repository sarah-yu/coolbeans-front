import React, { Component } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'

import Welcome from '../Welcome/Welcome'
import Header from '../Header/Header'
import Search from '../Search/Search'
import CoffeeList from '../CoffeeList/CoffeeList'

import './App.css'

class App extends Component {
	render() {
		return (
			<div>
				<Header />
				<main>
					<Switch>
						<Route
							exact
							path="/welcome"
							render={props => <Welcome {...props} />}
						/>
						<Route
							exact
							path="/coffees"
							render={props => <CoffeeList {...props} />}
						/>
						<Route
							exact
							path="/search"
							render={props => <Search {...props} />}
						/>
						<Route path="/*" render={() => <Redirect to="/welcome" />} />
					</Switch>
				</main>
			</div>
		)
	}
}

export default App
