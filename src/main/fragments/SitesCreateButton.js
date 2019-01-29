const I = actor();

module.exports = {

	root: ".granite-collection-create",

	// insert your locators and methods here

	gotoCreatePageWizard() {
		I.click("Create", this.root);
		I.click("Page", ".cq-siteadmin-admin-createpage");
	}

}
