import React, { Component } from 'react'

class Resource extends Component {
	render() {
		return (
			<div className="resources">
				<div className="resourcesWelcome">
					<h1>
						Welcome to the Resources page! Here you can find a glossary of terms
						present throughout our site!
					</h1>
				</div>

				<div className="jargon">
					<h4>
						There are a lot of terms to describe coffee that may seem confusing!
						Here's a condensed list of terms we use throughout our site.
					</h4>
					<ul>
						<li>
							Acidity: Acidity refers to the liveliness or sharpness the coffee
							leaves in your mouth. Coffee is technically considered neutral in
							acid, so the term refers more to the perceived taste than actual
							varying levels of acid.
						</li>
						<li>
							Body: Body refers to the weight of the coffee when you drink it!
							It can be described as the feeling or 'consistency' that the
							coffee leaves in your mouth.
						</li>
						<li>
							Flavor: Unsurprisingly, flavor refers to the overall taste of the
							drink. It's the combination of the acidity & body along with the
							notes present in the coffee.
						</li>
						<li>
							Notes: Notes refer to specific flavor qualities that are present
							in the coffee. Notes can be descriptors such as 'fruity' or
							'nutty'.
						</li>
					</ul>
				</div>

				<div className="notes">
					<h4>
						Below you can find a list of flavor notes we focused on in our
						registry!
					</h4>
					<ul>
						<li>
							Fruity: 'Fruity' notes refer to fruit-like qualities in the
							coffee. It can vary from a coffee having strawberry undertones to
							canteloupe understones!
						</li>
						<li>
							Sour: 'Sour' refers to the tartness of the coffee. Many of these
							notes tend to be fruity in nature; think about the 'sourness' of
							citrus fruits or granny smith apples.
						</li>
						<li>
							Veggie: 'Veggie' refers to 'green' notes, notes that are derived
							from plants or earthy flavors. For example, earthy tones such as
							olive oil or peapods would be considered veggie.
						</li>
						<li>
							Roasted: 'Roasted' refers to flavors reminiscent of roasted
							things, like cereal. Grainy, malt-y, even tobacco undertones in
							the coffee are categorized as 'roasted'.
						</li>
						<li>
							Spicy: Spicy refers to flavors remiscent of different spices.
							Cinnamon, nutmeg, anise understones would all be considered
							"spicy".
						</li>
						<li>
							Nutty/Cocoa: Nutty/Cocoa indicates the presence of either nutty
							(like peanut or almond) undertones or chocolate-y (dark or light)
							undertones in the coffee.
						</li>
						<li>
							Sweet: Sweet notes are generally sweeter in nature. Fruity,
							floral, and chocolate-y notes help a coffee be categorized as
							'sweet'.
						</li>
						<li>
							Floral: Floral notes in general tend to refer to flavors
							reminiscent of teas, such as lavender, jasmine, & coriander.
						</li>
						<li>
							Weird: Weird, or exotic, notes is a catch-all for flavors that
							don't fit under the other categories. This category runs the gamut
							from woody to rubbery!
						</li>
					</ul>
				</div>

				<div className="images">
					<h4> Here are some images that might be useful to you!</h4>

					<h5>Flavor Wheel:</h5>
					<img
						src="http://www.scanews.coffee/wp-content/uploads/2016/01/SCAA_FlavorWheel.01.18.15.jpg"
						alt="SCAA Coffee Flavor Wheel"
					/>

					<h5>Intro to coffee profiles: </h5>
					<img
						src="https://i.pinimg.com/originals/29/2d/38/292d389baba11880be1bfe992ac6e672.jpg"
						alt="World coffee map"
					/>
				</div>
			</div>
		)
	}
}
