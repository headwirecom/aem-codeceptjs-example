const I = require("../custom_steps.js")();

const locators = {
	signOut: locate("coral-anchorbutton-label")
		.withText(("Sign Out"))
		.as("Sign Out")
};

module.exports = {

	checkUser(name = "Administrator") {
		I.see(name);
	},

	async signOut() {
		return I.click(locators.signOut);
	}
}
