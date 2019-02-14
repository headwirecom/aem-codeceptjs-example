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

	async clickButton(actionName) {
		return I.click(actionButton(actionName, actionName));
	},

	async save() {
		return I.click(locators.save);
	},
	
	async clickFormatButton() {
		return I.click(locators.format);
	},
	
	async clickFormatBoldButton() {
		return I.click(locators.boldFont);
	},
	
	async toggleBold() {
		await this.clickFormatButton();
		return this.clickFormatBoldButton();
	},
	
	async type(text) {
		return I.type(text);
	}
}