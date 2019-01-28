Feature("Administering pages in AEM");

Before((sitesPage, loginPage) => {
	sitesPage.open("/content");
    loginPage.signIn();
});

Scenario("Navigate to 'Create Page' wizard", (I, sitesPage) => {
	I.click({'xpath': '//coral-columnview-item[4]'});
	I.pressRight(2);
	I.click('Create', '.granite-collection-create');
	I.click('Page', '.cq-siteadmin-admin-createpage');

	I.seeTitleEquals("AEM Sites | Create Page");
	I.seeInCurrentUrl("/content/we-retail/language-masters/en");

	I.see("Template");
	I.see("Properties");
	I.see("Create Page");
	I.see("Content Page");
});

Scenario("Create 'My Page' test page", I => {
	I.amOnAuthor("/mnt/overlay/wcm/core/content/sites/createpagewizard.html/content/we-retail/language-masters/en");

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