const I = require("../custom_steps.js")();
const sidePanel = require("../fragments/EditorSidePanel.js");

const url = "/editor.html";

const extension = ".html";
const appendExtension = function(path) {
	if (!path || path.endsWith(extension)) {
		return path;
	}

	return path + extension;
};

const getUrl = function(path) {
	return url + appendExtension(path);
};

const getParsysDataPath = function(path) {
	return path + "/*";
};

const locators = {
	editable(path) {
		return locate("//div[contains(@data-path, '" + path + "')]")
			.as("Editable under " + path);
	},
	button(name) {
		return locate("//button[contains(@data-action, '" + name + "')]")
			.as("Toolbar button for '" + name + "'");
	},
	component(name) {
		return locate("//coral-selectlist-item[contains(text(),'" + name + "')]")
			.as("List item for component '" + name + "'");
	}
};

module.exports = {

	async validate(path = "") {
		I.ensureUrl(url);

		I.seeInCurrentUrl(getUrl(path));
		I.see("Edit");
		return I.see("Preview");
	},

	open(path = "") {
		I.amOnPage(getUrl(path));
	},

	async clickEditable(path) {
		return I.click(locators.editable(path));
	},

	async clickActionButton(actionName) {
		return I.click(locators.button(actionName));
	},

	async invokeOnEditable(editablePath, actionName) {
		await this.clickEditable(editablePath);
		return this.clickActionButton(actionName);
	},

	async openInsertDialog(parsysPath) {
		return this.invokeOnEditable(getParsysDataPath(parsysPath), "INSERT");
	},

	async addComponent(componentName, parsysPath) {
		await this.openInsertDialog(parsysPath);
		return I.click(locators.component(componentName));
	},

	async openInlineEditor(editablePath) {
		return this.invokeOnEditable(editablePath, "EDIT");
	},

	getInlineEditor() {
		return require("../fragments/InlineRichtextEditor.js");
	},

	async openDialog(editablePath) {
		return this.invokeOnEditable(editablePath, "CONFIGURE");
	},

	getDialog(editablePath) {
		return require("../fragments/Dialog.js")(editablePath);
	},

	async dragAndDrop(componentName, parsysPath) {
		await sidePanel.toggleVisible();
		await sidePanel.clickComponentsTab();
		let componentLocator = sidePanel.waitForComponent(componentName);
		let parsysLocator = locators.editable(getParsysDataPath(parsysPath));
		I.waitForVisible(parsysLocator);
		I.dragAndDrop(componentLocator, parsysLocator);
		await sidePanel.clickAssetsTab();
		await sidePanel.toggleVisible();
	}
}
