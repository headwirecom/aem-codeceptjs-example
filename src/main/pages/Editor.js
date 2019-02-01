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

module.exports = {

	validate(path = "") {
		I.seeInCurrentUrl(getUrl(path));
		I.see("Edit");
		I.see("Preview");
	},

	open(path = "") {
		I.amOnAuthor(getUrl(path));
	},

	clickEditable(path) {
		I.click({"xpath": "//div[@data-path='" + path + "']"});
	},

	clickActionButton(actionName) {
		I.click({"xpath": "//button[@data-action='" + actionName + "']"});
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
		I.click({"xpath": "//coral-selectlist-item[contains(text(),'" + componentName + "')]"});
		I.wait(1);
	},

	editInline(editablePath) {
		this.invokeOnEditable(editablePath, "EDIT");
	},

	openDialog(editablePath) {
		this.invokeOnEditable(editablePath, "CONFIGURE");
		return require("../fragments/Dialog.js")(editablePath);
	}
}
