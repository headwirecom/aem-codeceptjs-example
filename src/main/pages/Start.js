const I = require("../custom_steps.js")();

module.exports = {

	...require("./AuthorBase.js"),

	url: "/aem/start.html",

	navCard(text) {
		return locate(".globalnav-homecard")
			.withText(text)
			.as("Navigation Card: " + text);
	},

	containsCard(text) {
		I.see(text, this.navCard(text));
	},

	validate() {
		I.seeInCurrentUrl(this.url);
		I.seeTitleEquals("AEM Start");

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
		I.amOnAuthor(this.url);
	},

	clickCard(text) {
		I.click(this.navCard(text));
	},

	gotoSites() {
		this.clickCard("Sites");
	}
}
