const I = require('../custom_steps.js')();

module.exports = {
	
	url: "/mnt/overlay/wcm/core/content/sites/createpagewizard.html",

	// insert your locators and methods here

	validate(path = "") {
		I.seeInCurrentUrl(this.url + path);
		I.seeTitleEquals("AEM Sites | Create Page");

		I.see("Template");
		I.see("Properties");
		I.see("Create Page");
		I.see("Content Page");
	},

	open(path = "") {
		I.amOnAuthor(this.url + path);
	},

	create(title, name = "") {
		I.click('Content Page', '.foundation-collection-item');
		I.click('Next');
		I.pressTab(3);
		I.type(title);
		I.pressTab();
		I.type(name);
		I.pressEnter();
	},

	validateCreated() {
		I.see("Success");
		I.see("Your page has been created.");
	}

}
