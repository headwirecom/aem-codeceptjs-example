Feature("Signing In to AEM");

Before(loginPage => {
	loginPage.open();
});

Scenario("Open 'Sign In' page", async loginPage => {
	await loginPage.validate();
});

Scenario("Enter Start page", async (loginPage, startPage) => {
	await loginPage.signIn();
	startPage.validate();
	startPage.checkUser();
	await startPage.signOut();
	loginPage.validate();
});
