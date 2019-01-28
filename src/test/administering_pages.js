Feature("Administering pages in AEM");

Before((sitesPage, loginPage) => {
	sitesPage.open("/content");
    loginPage.signIn();
});

let parentPagePath = "/content/we-retail/language-masters/en";

Scenario("Navigate to 'Create Page' wizard", (sitesPage, createPageWizardPage) => {
	sitesPage.switchToListView();
	sitesPage.navigateTo(['We.Retail', 'Language Master', 'English']);
	sitesPage.gotoCreatePageWizard();
	createPageWizardPage.validate(parentPagePath);
});

Scenario("Create 'My Page' test page", (I, createPageWizardPage) => {
	createPageWizardPage.open(parentPagePath);

	I.click('Content Page', '.foundation-collection-item');
	I.click('Next');
	I.pressTab(3);
	I.type('My Page');
	I.pressTab();
	I.type('mypage');
	I.pressEnter();
	
	I.see("Success");
	I.see("Your page has been created.");
});
