import React, { Component } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'

import Welcome from '../Welcome/Welcome'
import Header from '../Header/Header'
import Search from '../Search/Search'
import CoffeeList from '../CoffeeList/CoffeeList'
import Resource from '../Resource/Resource'
import Coffee from '../Coffee/Coffee'
import NewCoffee from '../NewCoffee/NewCoffee'

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
							path="/resources"
							render={props => <Resource {...props} />}
						/>
						<Route
							exact
							path="/coffees"
							render={props => <CoffeeList {...props} />}
						/>
						<Route
							exact
							path="/coffees/:_id"
							render={props => <Coffee {...props} />}
						/>
						<Route
							exact
							path="/new-coffee"
							render={props => <NewCoffee {...props} />}
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
