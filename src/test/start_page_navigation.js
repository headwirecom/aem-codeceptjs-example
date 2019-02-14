Feature("Navigation in Start page");

Before(async (loginPage, startPage) => {
	startPage.open();
    await loginPage.signIn();
});

Scenario("Enter Sites page", async (startPage, sitesPage) => {
	await startPage.gotoSites();
	await sitesPage.validate();
});
