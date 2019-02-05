const I = require("../custom_steps.js")();
const viewSwitcherFragment = I.requireFragment("SitesViewSwitcher");
const createButtonFragment = I.requireFragment("SitesCreateButton");

const url = "/sites.html";

module.exports = { ...require("./AuthorBase.js"),

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
