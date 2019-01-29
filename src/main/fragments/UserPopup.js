const I = require("../custom_steps.js")();

module.exports = {

	checkUser(name = "Administrator") {
		I.see(name);
	},

	signOut() {
		I.click('Sign Out');
	}

}
