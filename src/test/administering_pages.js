Feature("Administering pages in AEM");

Scenario("Open 'Sign In' page", I => {
	I.amOnAuthor();

	I.seeTitleEquals("AEM Sign In");
	I.see("Sign In", "#sign-in-title");
});

Scenario("Enter 'AEM Start'", I => {
	I.amOnAuthor();
	I.signIn();

	I.seeTitleEquals("AEM Start");

	let locator = ".globalnav-homecard-title";
	I.see("Projects", locator);
	I.see("Sites", locator);
	I.see("Experience Fragments", locator);
	I.see("Assets", locator);
	I.see("Forms", locator);
	I.see("Screens", locator);
	I.see("Personalization", locator);
	I.see("Commerce", locator);
	I.see("Communities", locator);
});

Scenario("Enter 'Sites'", I => {
	I.amOnAuthor();
	I.signIn();

	// This locator is not the best. It's too specific, but 'click' seems not to work with coral elements
	// It would need to be investigated further as such code will quickly become unmaintainable.
	I.click("Sites", {"xpath": "//*[@id='globalnav-start-home-collection']/coral-masonry-item[2]"});

	I.seeTitleEquals("AEM Sites");
	I.seeInCurrentUrl("/sites.html/content");
	I.see("Sites");
});

Scenario("Navigate to 'Create Page' wizard", I => {
	I.amOnAuthor("/sites.html/content");
	I.signIn();

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
	I.signIn();

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