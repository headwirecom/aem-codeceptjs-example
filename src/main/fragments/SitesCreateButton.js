const I = require("../custom_steps.js")();

module.exports = {

	root: locate(".granite-collection-create")
		.as("'Create' Button"),
	createPageItem: locate(".cq-siteadmin-admin-createpage")
		.as("'Create Page' Item"),

	gotoCreatePageWizard() {
		I.click("Create", this.root);
		I.click("Page", this.createPageItem);
	}

}
