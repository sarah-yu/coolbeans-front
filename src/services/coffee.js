import axios from 'axios'

let servicePath
if (document.location.hostname === 'localhost') {
	servicePath = 'http://localhost:3001'
} else {
	servicePath = 'https://cool-beans-api.herokuapp.com'
}

export function getCoffees() {
	axios
		.get(`${servicePath}/coffees`)
		.then(res => {
			this.setState({
				coffees: res.data
			})
		})
		.catch(err => console.log(err))
}

export function getCoffee(id) {
	axios
		.get(`${servicePath}/coffees/${id}`)
		.then(res => {
			console.log(res.data)

			let flavorProfile = res.data.flavorProfile[0]

			this.setState({
				coffee: {
					name: res.data.name,
					region: res.data.region,
					country: res.data.country,
					imgUrl: res.data.imgUrl,
					description: res.data.description,
					flavorProfile: [
						{
							acidity: flavorProfile.acidity,
							body: flavorProfile.body,
							notes: {
								isWeird: flavorProfile.notes.isWeird,
								isFloral: flavorProfile.notes.isFloral,
								isSweet: flavorProfile.notes.isSweet,
								isNuttyCocoa: flavorProfile.notes.isNuttyCocoa,
								isSpicy: flavorProfile.notes.isSpicy,
								isRoasted: flavorProfile.notes.isRoasted,
								isVeggie: flavorProfile.notes.isVeggie,
								isSour: flavorProfile.notes.isSour,
								isFruity: flavorProfile.notes.isFruity
							}
						}
					]
				}
			})
		})
		.catch(err => {
			console.log(err)
		})
}

export function removeCoffee(id) {
	axios
		.delete(`${servicePath}/coffees/${id}`)
		.then(res => {
			console.log(`${this.state.name} coffee was deleted.`)
			this.props.history.push('/coffees')
		})
		.catch(err => console.log(err))
}

export function createCoffee(newCoffee) {
	axios
		.post(`${servicePath}/coffees`, newCoffee)
		.then(response => {
			console.log(response)
			this.props.history.push('/coffees')
		})
		.catch(err => {
			console.log(err)
		})
}

export function updateCoffee(id) {
	axios
		.put(`${servicePath}/coffees/${id}`, {
			...this.state.coffee
		})
		.then(response => {
			console.log(response.data._id)
			console.log(response.data)
			this.props.history.push(`/coffees/${response.data._id}`)
			console.log('Updated!')
		})
		.catch(err => console.log(err))
}

export default {
	getCoffees,
	getCoffee,
	createCoffee,
	updateCoffee
}
