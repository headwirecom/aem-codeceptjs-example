const I = require("../custom_steps.js")();

const url = "/editor.html";

const extension = ".html";
appendExtension = function(path) {
	if (!path || path.endsWith(extension)) {
		return path;
	}

	return path + extension;
};

getUrl = function(path) {
	return url + appendExtension(path);
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
}

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
		this.invokeOnEditable(parsysPath + "/*", "INSERT");
	},

	addComponent(parsysPath, componentName) {
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
	}
}
