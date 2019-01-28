Feature("Administering pages in AEM");

Before((I, loginPage) => {
	I.amOnAuthor();
    loginPage.signIn();
});

Scenario("Enter 'Sites'", I => {
	// This locator is not the best. It's too specific, but 'click' seems not to work with coral elements
	// It would need to be investigated further as such code will quickly become unmaintainable.
	I.click("Sites", {"xpath": "//*[@id='globalnav-start-home-collection']/coral-masonry-item[2]"});

	I.seeTitleEquals("AEM Sites");
	I.seeInCurrentUrl("/sites.html/content");
	I.see("Sites");
});

Scenario("Navigate to 'Create Page' wizard", I => {
	I.amOnAuthor("/sites.html/content");

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