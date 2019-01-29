const I = require("../custom_steps.js")();
const viewSwitcherFragment = require("../fragments/SitesViewSwitcher.js");
const createButtonFragment = require("../fragments/SitesCreateButton.js");

module.exports = {

	...require("./AuthorBase.js"),
	
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
		viewSwitcherFragment.switchToListView();
	},

	navigateTo(pageTitles) {
		for(let i = 0; i < pageTitles.length; i++) {
			I.click(pageTitles[i]);
		}
	},

	gotoCreatePageWizard() {
		createButtonFragment.gotoCreatePageWizard();
	}
}
