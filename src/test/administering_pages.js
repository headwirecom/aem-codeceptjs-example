Feature("Administering pages in AEM");

Before(loginPage => {
    loginPage.signIn();
});

const parentPagePath = "/content/we-retail/language-masters/en";

Scenario("Navigate to 'Create Page' wizard", (sitesPage, createPageWizardPage) => {
	sitesPage.open("/content");
	sitesPage.switchToListView();
	sitesPage.navigateListViewTo(["We.Retail", "Language Master", "English"]);
	sitesPage.gotoCreatePageWizard();
	createPageWizardPage.validate(parentPagePath);
});

Scenario("Create 'My Page' test page", createPageWizardPage => {
	createPageWizardPage.open(parentPagePath);
	createPageWizardPage.create("Content Page", "My Page", "my-page");
	createPageWizardPage.validateCreated();
});
