Feature("Editing pages in AEM");

Before(loginPage => {
    loginPage.signIn();
});

const pagePath = "/content/we-retail/language-masters/en/my-page";
const parsysPath = pagePath + "/jcr:content/root/responsivegrid";
const titlePath = parsysPath + "/title";
const textPath = parsysPath + "/text";

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

Scenario("Inline Editor", editorPage => {
	editorPage.open(pagePath);
	editorPage.addComponent(parsysPath, "Text");
	let inlineEditor = editorPage.editInline(textPath);
	inlineEditor.type("This text has no formatting. ");
	inlineEditor.toggleBold();
	inlineEditor.type("This text has bold formatting.");
});
