const I = require("../custom_steps.js")();

module.exports = {

	url: "/libs/granite/core/content/login.html",

	username: locate("#username").as("User Name input"),
	password: locate("#password").as("Password input"),

	validate() {
		I.seeInCurrentUrl(this.url);
		I.seeTitleEquals("AEM Sign In");
		I.see("Sign In");
	},

	open() {
		I.amOnAuthor(this.url);
	},

	signIn(username = "admin", password = "admin") {
		I.fillField(this.username, username);
		I.fillField(this.password, password);
		I.pressEnter();
	}
}
