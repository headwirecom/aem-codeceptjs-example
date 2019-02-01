Feature("Editing pages in AEM");

Before(loginPage => {
    loginPage.signIn();
});

const pagePath = "/content/we-retail/language-masters/en/my-page";
const parsysPath = pagePath + "/jcr:content/root/responsivegrid";
const titlePath = parsysPath + "/title";

Scenario("Check whether the page exists", editorPage => {
	editorPage.open(pagePath);
	editorPage.validate();
});

Scenario("Add Title", editorPage => {
	editorPage.open(pagePath);
	editorPage.addComponent(parsysPath, "Title");
	let dialog = editorPage.openDialog(titlePath);
	dialog.set("jcr:title", "My Custom Title");
	dialog.submit();
});
