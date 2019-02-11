const I = require("../custom_steps.js")();
const viewSwitcherFragment = require().fragment("SitesViewSwitcher");
const createButtonFragment = require().fragment("SitesCreateButton");

const url = "/sites.html";

module.exports = { ...require().page("AuthorBase"),

	validate(path = "") {
		I.ensureUrl(url);

		I.seeInCurrentUrl(url + path);
		I.seeInTitle("AEM Sites");
		I.see("Sites");
	},

	open(path = "") {
        I.amOnPage(url + path);
        I.seeInTitle("AEM Sites");
	},

	switchToListView() {
		viewSwitcherFragment.switchToListView();
	},

	navigateListViewTo(pageTitles) {
		for(let i = 0; i < pageTitles.length; i++) {
			let title = pageTitles[i];
			I.see(title);
			I.click(title);
		}
	},

	gotoCreatePageWizard() {
		createButtonFragment.gotoCreatePageWizard();
	}
}
