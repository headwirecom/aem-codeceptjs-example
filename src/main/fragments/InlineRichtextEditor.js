const I = require("../custom_steps.js")();

const actionButton = function(action, description) {
	return locate("//button[contains(@data-action, '" + action + "')]")
		.as(description);
};
const locators = {
	save: actionButton("control#save", "Save"),
	format: actionButton("#format", "Format"),
	boldFont: actionButton("format#bold", "Bold Font")
}

module.exports = {

	clickButton(actionName) {
		I.click(actionButton(actionName, actionName));
	},

	close() {
		I.click(locators.save);
	},
	
	clickFormatButton() {
		I.click(locators.format);
	},
	
	clickFormatBoldButton() {
		I.click(locators.boldFont);
	},
	
	toggleBold() {
		this.clickFormatButton();
		this.clickFormatBoldButton();
	},
	
	type(text) {
		I.type(text);
	}
}