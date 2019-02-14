const I = require("../custom_steps.js")();

const url = "/libs/granite/core/content/login.html";

const locators = {
	username: locate("#username").as("User Name input"),
	password: locate("#password").as("Password input"),
	button: locate("//button").as("Sign In button")
};

module.exports = {

	async validate() {
		I.ensureUrl(url);

		I.seeInCurrentUrl(url);
		I.seeInTitle("AEM Sign In");
		return I.see("Sign In");
	},

	open() {
		I.amOnPage(url);
	},

	async signIn(username = "admin", password = "admin") {
		await I.fillField(locators.username, username);
		await I.fillField(locators.password, password);
		return I.click(locators.button);
	}
}
