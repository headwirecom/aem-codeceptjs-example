const I = require("../custom_steps.js")();

const locators = {
	root: locate(".granite-collection-create")
		.as("'Create' Button"),
	createPageItem: locate(".cq-siteadmin-admin-createpage")
		.as("'Create Page' Item")
};

module.exports = {

	gotoCreatePageWizard() {
		I.click("Create", locators.root);
		I.click("Page", locators.createPageItem);
	}
}
