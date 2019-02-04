const I = require("../custom_steps.js")();
const viewSwitcherFragment = require("../fragments/SitesViewSwitcher.js");
const createButtonFragment = require("../fragments/SitesCreateButton.js");

const url = "/sites.html";

module.exports = { ...require("./AuthorBase.js"),

	validate(path = "") {
		I.ensureUrl(url);

		I.seeInCurrentUrl(url + path);
		I.seeInTitle("AEM Sites");
		I.see("Sites");
	},

	open: async function(path = "") {

        I.amOnPage(url + path);
        I.seeInTitle("AEM Sites");

        // need to wait in case the onboarding dialog shows up
        I.wait(1);

        const that = this;
        return new Promise( async function(resolve) {
            let count = await I.grabNumberOfVisibleElements(locate(".granite-shell-onboarding-popover"));
            if(count > 0) {
                that.dismissOnboarding();
            }
            resolve();
        })
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
