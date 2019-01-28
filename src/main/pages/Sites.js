const I = require('../custom_steps.js')();

module.exports = {
	
	url: "/sites.html/content",

	// insert your locators and methods here

	validate() {
		I.seeTitleEquals("AEM Sites");
		I.seeInCurrentUrl(this.url);
		I.see("Sites");
	},

	open() {
		I.amOnAuthor(this.url);
	}
}
