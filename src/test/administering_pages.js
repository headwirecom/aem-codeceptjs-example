Feature("Administering pages in AEM");

Scenario("Open Sign In page", I => {
	I.amOnAuthor();
	I.see("Sign In", "#sign-in-title");
});

Scenario("Enter AEM Start", I => {
	I.amOnAuthor();
	I.signIn();

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