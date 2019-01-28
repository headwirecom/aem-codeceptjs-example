const I = require('../custom_steps.js')();

module.exports = {

	url: "/libs/granite/core/content/login.html",

	// insert your locators and methods here

	validate() {
		I.seeInCurrentUrl(this.url);
		I.seeTitleEquals("AEM Sign In");
		I.see("Sign In");
	},

	open() {
		I.amOnAuthor(this.url);
	},

	signIn(username = "admin", password = "admin") {
		I.fillField("#username", username);
		I.fillField("#password", password);
		I.pressEnter();
	}
}