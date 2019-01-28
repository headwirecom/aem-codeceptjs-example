const I = require('../custom_steps.js')();

module.exports = {

	// insert your locators and methods here

	validate() {
		I.seeTitleEquals("AEM Sign In");
		I.see("Sign In");
	},

	signIn(username = "admin", password = "admin") {
		I.fillField("#username", username);
		I.fillField("#password", password);
		I.pressEnter();
	}
}