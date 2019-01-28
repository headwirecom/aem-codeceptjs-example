Feature("Navigation from 'Start Page'");

Before((I, loginPage) => {
	I.amOnAuthor();
    loginPage.signIn();
});

Scenario("Enter 'Sites'", (startPage, sitesPage) => {
	startPage.gotoSites();
	sitesPage.validate();
});