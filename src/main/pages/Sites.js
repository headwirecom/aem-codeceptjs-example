const I = require('../custom_steps.js')();

module.exports = {
	
	url: "/sites.html",

	// insert your locators and methods here

	validate(path = "") {
		I.seeInCurrentUrl(this.url + path);
		I.seeTitleEquals("AEM Sites");
		I.see("Sites");
	},

	open(path = "") {
		I.amOnAuthor(this.url + path);
	}
}
