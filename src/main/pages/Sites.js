const I = require('../custom_steps.js')();

module.exports = {
	
	url: "/sites.html/content",

	// insert your locators and methods here

	validate() {
		I.seeInCurrentUrl(this.url);
		I.seeTitleEquals("AEM Sites");
		I.see("Sites");
	},

	open() {
		I.amOnAuthor(this.url);
	}
}
