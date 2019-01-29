Feature("Administering pages in AEM");

Before((sitesPage, loginPage) => {
	sitesPage.open("/content");
    loginPage.signIn();
});

let parentPagePath = "/content/we-retail/language-masters/en";

Scenario("Navigate to 'Create Page' wizard", (sitesPage, createPageWizardPage) => {
	sitesPage.switchToListView();
	sitesPage.navigateTo(["We.Retail", "Language Master", "English"]);
	sitesPage.gotoCreatePageWizard();
	createPageWizardPage.validate(parentPagePath);
});

Scenario("Create 'My Page' test page", createPageWizardPage => {
	createPageWizardPage.open(parentPagePath);
	createPageWizardPage.create("My Page", "my-page");
	createPageWizardPage.validateCreated();
});
