Feature("Editing pages in AEM");

Before(loginPage => {
    loginPage.signIn();
});

const pagePath = "/content/we-retail/language-masters/en/my-page";

Scenario("Check whether the page exists", editorPage => {
	editorPage.open(pagePath);
	editorPage.validate();
});
