Feature("Navigation from 'Start Page'");

Before((startPage, loginPage) => {
	startPage.open();
    loginPage.signIn();
});

Scenario("Enter 'Sites'", (startPage, sitesPage) => {
	startPage.gotoSites();
	sitesPage.validate();
});
