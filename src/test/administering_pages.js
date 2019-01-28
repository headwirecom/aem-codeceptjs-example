Feature("Administering pages in AEM");

Before((sitesPage, loginPage) => {
	sitesPage.open("/content");
    loginPage.signIn();
});

let parentPagePath = "/content/we-retail/language-masters/en";

Scenario("Navigate to 'Create Page' wizard", (I, createPageWizardPage) => {
	I.click({'xpath': '//coral-columnview-item[4]'});
	I.pressRight(2);
	I.click('Create', '.granite-collection-create');
	I.click('Page', '.cq-siteadmin-admin-createpage');

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
