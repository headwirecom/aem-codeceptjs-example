Feature("Signing In to AEM");

Before(I => {
	I.amOnAuthor();
});

Scenario("Open 'Sign In' page", loginPage => {
	loginPage.validate();
});

Scenario("Enter 'AEM Start'", (loginPage, startPage) => {
	loginPage.signIn();
	startPage.validate();
});