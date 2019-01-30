const I = require("../custom_steps.js")();

module.exports = {

	locators: {
		signOut: locate("coral-anchorbutton-label").withText(("Sign Out")).as("Sign Out")
	},

	checkUser(name = "Administrator") {
		I.see(name);
	},

	signOut() {
		I.click(this.locators.signOut);
	}

}
