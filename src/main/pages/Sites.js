const I = require("../custom_steps.js")();

module.exports = {

	...require('./AuthorBase.js'),
	
	url: "/sites.html",

	// insert your locators and methods here

	validate(path = "") {
		I.seeInCurrentUrl(this.url + path);
		I.seeTitleEquals("AEM Sites");
		I.see("Sites");
	},

	open(path = "") {
		I.amOnAuthor(this.url + path);
	},

	switchToListView() {
		I.click("#granite-collection-switcher-toggle");
		I.waitForVisible(".granite-collection-switcher .coral3-SelectList", 5);
		I.pressTab();
		I.pressDown(2);
		I.pressEnter();
	},

	navigateTo(pageTitles) {
		for(let i = 0; i < pageTitles.length; i++) {
			I.click(pageTitles[i]);
		}
	},

	gotoCreatePageWizard() {
		I.click("Create", ".granite-collection-create");
		I.click("Page", ".cq-siteadmin-admin-createpage");
	}
}
