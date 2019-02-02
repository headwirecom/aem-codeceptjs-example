const I = require("../custom_steps.js")();

const url = "/aem/start.html";

const locators = {
	navCard(text) {
		return locate(".globalnav-homecard")
			.withText(text)
			.as("Navigation Card: " + text);
	}
};

module.exports = { ...require("./AuthorBase.js"),

	containsCard(text) {
		I.see(text, locators.navCard(text));
	},

	validate() {
		I.seeInCurrentUrl(url);
		I.seeInTitle("Start");

		this.containsCard("Projects");
		this.containsCard("Sites");
		this.containsCard("Experience Fragments");
		this.containsCard("Assets");
		this.containsCard("Forms");
		this.containsCard("Screens");
		this.containsCard("Personalization");
		this.containsCard("Commerce");
		this.containsCard("Communities");
	},

	open() {
		I.amOnPage(url);
	},

	clickCard(text) {
		I.click(locators.navCard(text));
	},

	gotoSites() {
		this.clickCard("Sites");
	}
}
