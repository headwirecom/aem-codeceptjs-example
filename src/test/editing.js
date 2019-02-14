Feature("Editing pages in AEM");

Before(async loginPage => {
    loginPage.open();
    await loginPage.signIn();
});

const pagePath = "/content/we-retail/language-masters/en/tests/editing-pages";
const parsysPath = pagePath + "/jcr:content/root/responsivegrid";
const titlePath = parsysPath + "/title";
const textPath = parsysPath + "/text";

Scenario("Check whether the page exists", async editorPage => {
	editorPage.open(pagePath);
	await editorPage.validate();
});

Scenario("Add Title", async editorPage => {
	editorPage.open(pagePath);
	await editorPage.addComponent("Title", parsysPath);
});

Scenario("Edit Title", async editorPage => {
	editorPage.open(pagePath);
	await editorPage.openDialog(titlePath);
	let dialog = editorPage.getDialog(titlePath);
	dialog.set("jcr:title", "My Custom Title");
	await dialog.submit();
});

Scenario("Inline Editor", async editorPage => {
	editorPage.open(pagePath);
	await editorPage.openInlineEditor(textPath);
	let inlineEditor = editorPage.getInlineEditor();
	await inlineEditor.type("This text has no formatting. ");
	await inlineEditor.toggleBold();
	await inlineEditor.type("This text has bold formatting.");
	await inlineEditor.save();
});

Scenario("Drag and Drop", async editorPage => {
	editorPage.open(pagePath);
	await editorPage.dragAndDrop("Text", parsysPath);
});
