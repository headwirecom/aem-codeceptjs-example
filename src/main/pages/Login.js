const I = require("../custom_steps.js")();

const url = "/libs/granite/core/content/login.html";

const locators = {
	username: locate("#username").as("User Name input"),
	password: locate("#password").as("Password input"),
	button: locate("//button").as("Sign In button")
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
		I.fillField(locators.username, username);
		I.fillField(locators.password, password);
		I.click(locators.button);
	}
}
