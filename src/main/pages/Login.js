const I = require("../custom_steps.js")();

const url = "/libs/granite/core/content/login.html";

const locators = {
	username: locate("#username").as("User Name input"),
	password: locate("#password").as("Password input")
};

module.exports = {

	validate() {
		I.seeInCurrentUrl(url);
		I.seeInTitle("AEM Sign In");
		I.see("Sign In");
	},

	open() {
		I.amOnPage(url);
	},

	signIn(username = "admin", password = "admin") {
		this.open();
		I.fillField(locators.username, username);
		I.fillField(locators.password, password);
		I.click("Sign In");
	}
}
