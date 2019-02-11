Feature("Administering pages in AEM");

Before(loginPage => {
    loginPage.open();
    loginPage.signIn();
});

const parentPagePath = "/content/we-retail/language-masters/en/tests";

Scenario("Navigate to 'Create Page' wizard", async (sitesPage, createPageWizardPage) => {
	sitesPage.open("/content");
	await sitesPage.dismissOnboarding();
	sitesPage.switchToListView();
	sitesPage.navigateListViewTo(["We.Retail", "Language Master", "English", "Test Content Root"]);
	sitesPage.gotoCreatePageWizard();
	createPageWizardPage.validate(parentPagePath);
});

Scenario("Create 'My Page' test page", createPageWizardPage => {
	createPageWizardPage.open(parentPagePath);
	createPageWizardPage.create("Content Page", "My Page", "my-page");
	createPageWizardPage.validateCreated();
});
