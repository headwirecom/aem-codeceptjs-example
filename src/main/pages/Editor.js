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

	validate(path = "") {
		I.seeInCurrentUrl(getUrl(path));
		I.see("Edit");
		I.see("Preview");
	},

	open(path = "") {
		I.amOnPage(getUrl(path));
	},

	clickEditable(path) {
		I.click(locators.editable(path));
	},

	clickActionButton(actionName) {
		I.click(locators.button(actionName));
	},

	invokeOnEditable(editablePath, actionName) {
		this.clickEditable(editablePath);
		this.clickActionButton(actionName);
	},

	openInsertDialog(parsysPath) {
		this.invokeOnEditable(getParsysDataPath(parsysPath), "INSERT");
	},

	addComponent(componentName, parsysPath) {
		this.openInsertDialog(parsysPath);
		I.click(locators.component(componentName));
		I.wait(1);
	},

	editInline(editablePath) {
		this.invokeOnEditable(editablePath, "EDIT");
		return require("../fragments/InlineRichtextEditor.js");
	},

	openDialog(editablePath) {
		this.invokeOnEditable(editablePath, "CONFIGURE");
		return require("../fragments/Dialog.js")(editablePath);
	},

	dragAndDrop(componentName, parsysPath) {
		sidePanel.toggleVisible();
		sidePanel.clickComponents();
		I.wait(1);
		I.dragAndDrop(sidePanel.locateComponent(componentName),
			locators.editable(getParsysDataPath(parsysPath)));
		sidePanel.clickAssets();
		sidePanel.toggleVisible();
	}
}
