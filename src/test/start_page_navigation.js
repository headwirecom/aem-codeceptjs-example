Feature("Navigation in Start page");

Before((loginPage, startPage) => {
	startPage.open();
    loginPage.signIn();
});

Scenario("Enter Sites page", (startPage, sitesPage) => {
	startPage.gotoSites();
	sitesPage.validate();
});
