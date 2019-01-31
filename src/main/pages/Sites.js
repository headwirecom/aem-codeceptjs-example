const I = require("../custom_steps.js")();
const viewSwitcherFragment = require("../fragments/SitesViewSwitcher.js");
const createButtonFragment = require("../fragments/SitesCreateButton.js");

const url = "/sites.html";

module.exports = { ...require("./AuthorBase.js"),	

	validate(path = "") {
		I.seeInCurrentUrl(url + path);
		I.seeInTitle("AEM Sites");
		I.see("Sites");
	},

	open(path = "") {
		I.amOnAuthor(url + path);

		// hack to dismiss the onboarding dialog if it shows up
		I.executeScript(function(done) {
			let button = $('.granite-shell-onboarding-popover button')[0];
			if(button) {
				button.click();
			}
		});
		I.wait(1);
	},

	switchToListView() {
		viewSwitcherFragment.switchToListView();
	},

	navigateListViewTo(pageTitles) {
		for(let i = 0; i < pageTitles.length; i++) {
			I.see(pageTitles[i]);
			I.click(pageTitles[i]);
		}
	},

	gotoCreatePageWizard() {
		createButtonFragment.gotoCreatePageWizard();
	}
}
