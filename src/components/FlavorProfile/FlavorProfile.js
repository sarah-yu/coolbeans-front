import React, { Component } from 'react'
import axios from 'axios'


class FlavorProfile extends Component {
  constructor () {
      super()
      this.state = {
        body: null,
        acidity: null,
        notes:[]
      }
    }
  componentDidMount () {
  axios.get('#')
    .then((res) => {
      this.setState({
        body: res.data,
        acidity: res.data,
        notes: res.data
      })
    })
    .catch((err) => {
      console.log(err)
    })
}

render () {
	return (
		<div>
			<div className="flavor-profile-body">
				<div className="flavor-profile-tag"> {body} body </div>
			</div>
			<div className="flavor-profile-acidity">
				<div className="flavor-profile-tag"> {acidity} acidity </div>
			</div>
			<div className="flavor-profile-notes">
				{{this.state.notes.isFruity}? <div className="flavor-profile-tag"> Fruity </div> : <div />}
        {{this.state.notes.isSour}? <div className="flavor-profile-tag"> Sour </div> : <div />}
				{{this.state.notes.isVeggie}? <div className="flavor-profile-tag"> Earthy/Green </div> : <div />}
				{{this.state.notes.isRoasted}? <div className="flavor-profile-tag"> Roasted </div> : <div />}
				{{this.state.notes.isSpicy}? <div className="flavor-profile-tag"> Spiced </div> : <div />}
				{{this.state.notes.isNuttyCocoa}? <div className="flavor-profile-tag">  Nutty/Cocoa </div> : <div />}
				{{this.state.notes.isSweet}? <div className="flavor-profile-tag"> Sweet </div> : <div />}
				{{this.state.notes.isFloral}? <div className="flavor-profile-tag"> Floral </div> : <div />}
				{{this.state.notes.isWeird}? <div className="flavor-profile-tag"> Strange </div> : <div />}
			</div>
		</div>
	)
}
}

export default flavorProfile
