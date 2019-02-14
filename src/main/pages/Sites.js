const I = require("../custom_steps.js")();
const viewSwitcherFragment = require("../fragments/SitesViewSwitcher.js");
const createButtonFragment = require("../fragments/SitesCreateButton.js");

const url = "/sites.html";

module.exports = { ...require("./AuthorBase.js"),

	async validate(path = "") {
		I.ensureUrl(url);

		I.seeInCurrentUrl(url + path);
		I.seeInTitle("AEM Sites");
		return I.see("Sites");
	},

	open(path = "") {
        I.amOnPage(url + path);
        I.seeInTitle("AEM Sites");
	},

	async switchToListView() {
		return viewSwitcherFragment.switchToListView();
	},

	async navigateListViewTo(pageTitles) {
		for (let i = 0; i < pageTitles.length; i++) {
			let title = pageTitles[i];
			I.see(title);
			I.click(title);
		}
	},

	async gotoCreatePageWizard() {
		return createButtonFragment.gotoCreatePageWizard();
	}
}
