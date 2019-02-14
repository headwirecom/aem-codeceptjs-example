Feature("Administering pages in AEM");

Before(async loginPage => {
    loginPage.open();
    await loginPage.signIn();
});

const parentPagePath = "/content/we-retail/language-masters/en/tests";

Scenario("Navigate to 'Create Page' wizard", async (sitesPage, createPageWizardPage) => {
	sitesPage.open("/content");
	await sitesPage.dismissOnboarding();
	await sitesPage.switchToListView();
	await sitesPage.navigateListViewTo(["We.Retail", "Language Master", "English", "Test Content Root"]);
	await sitesPage.gotoCreatePageWizard();
	createPageWizardPage.validate(parentPagePath);
});

Scenario("Create 'My Page' test page", async createPageWizardPage => {
	createPageWizardPage.open(parentPagePath);
	await createPageWizardPage.create("Content Page", "My Page", "my-page");
	createPageWizardPage.validateCreated();
});
