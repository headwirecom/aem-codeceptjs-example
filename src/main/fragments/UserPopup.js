const I = require("../custom_steps.js")();

module.exports = {

	// insert your locators and methods here

	checkUser(name = "Administrator") {
		I.see(name);
	},

	signOut() {
		I.click('Sign Out');
	}

}
