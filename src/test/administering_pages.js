Feature("Administering pages in AEM");

Scenario("Open Sign In page", I => {
	I.amOnAuthor();

	I.seeTitleEquals("AEM Sign In");
	I.see("Sign In", "#sign-in-title");
});

Scenario("Enter AEM Start", I => {
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

Scenario("Enter Sites", I => {
	I.amOnAuthor();
	I.signIn();

	// This locator is not the best. It's too specific, but 'click' seems not to work with coral elements
	// It would need to be investigated further as such code will quickly become unmaintainable.
	I.click("Sites", {"xpath": "//*[@id='globalnav-start-home-collection']/coral-masonry-item[2]"});

	I.seeTitleEquals("AEM Sites");
	I.seeCurrentUrlEquals("http://localhost:4502/sites.html/content");
	I.see("Sites");
});