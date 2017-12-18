import React, { Component } from 'react'
import axios from 'axios'

import FlavorProfile from '../FlavorProfile/FlavorProfile.js'

class FlavorProfile extends Component {
class Coffee extends Component {


}


const Coffee = ({
	name,
	region,
	country,
	imgUrl,
	description,
	flavorProfile,
	...props
}) => {
	return (
		<div>
			<h1> {region} </h1>
			<h2> {name} </h2>
			<img src={imgUrl} alt={name} />
			<p> {description} </p>
			<h4> Flavor Profile Attributes </h4>
			<FlavorProfile name={name} />
		</div>
	)
}

Coffee.propTypes = {
	name: PropTypes.string.isRequired,
	region: PropTypes.string.isRequired,
	country: PropTypes.string.isRequired,
	imgUrl: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	flavorProfile: PropTypes.array.isRequired
}

export default Coffee
