Feature("Administering pages in AEM");

Before((sitesPage, loginPage) => {
    loginPage.signIn();
});

let parentPagePath = "/content/we-retail/language-masters/en";

Scenario("Navigate to 'Create Page' wizard", (I, sitesPage, createPageWizardPage) => {
	sitesPage.open("/content");
	sitesPage.switchToListView();
	I.say("time to navigate")
	sitesPage.navigateListViewTo(["We.Retail", "Language Master", "English"]);
	sitesPage.gotoCreatePageWizard();
	createPageWizardPage.validate(parentPagePath);
});

Scenario("Create 'My Page' test page", createPageWizardPage => {
	createPageWizardPage.open(parentPagePath);
	createPageWizardPage.create("Content Page", "My Page", "my-page");
	createPageWizardPage.validateCreated();
});
