Feature("Editing pages in AEM");

Before(loginPage => {
    loginPage.signIn();
});

const pagePath = "/content/we-retail/language-masters/en/tests/editing-pages";
const parsysPath = pagePath + "/jcr:content/root/responsivegrid";
const titlePath = parsysPath + "/title";
const textPath = parsysPath + "/text";

Scenario("Check whether the page exists", editorPage => {
	editorPage.open(pagePath);
	editorPage.validate();
});

Scenario("Add Title", editorPage => {
	editorPage.open(pagePath);
	editorPage.addComponent("Title", parsysPath);
	let dialog = editorPage.openDialog(titlePath);
	dialog.set("jcr:title", "My Custom Title");
	dialog.submit();
});

Scenario("Inline Editor", editorPage => {
	editorPage.open(pagePath);
	editorPage.addComponent("Text", parsysPath);
	let inlineEditor = editorPage.editInline(textPath);
	inlineEditor.type("This text has no formatting. ");
	inlineEditor.toggleBold();
	inlineEditor.type("This text has bold formatting.");
	inlineEditor.save();
});

Scenario("Drag and Drop", editorPage => {
	editorPage.open(pagePath);
	editorPage.dragAndDrop("Articles List", parsysPath);
});
