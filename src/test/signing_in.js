Feature("Signing In to AEM");

Scenario("Open 'Sign In' page", (I, loginPage) => {
	I.amOnAuthor();
	loginPage.validate();
});

Scenario("Enter 'AEM Start'", (I, loginPage) => {
	I.amOnAuthor();
	loginPage.signIn();

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