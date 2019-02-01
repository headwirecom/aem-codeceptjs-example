const I = require("../custom_steps.js")();

module.exports = {

	clickButton(actionName) {
		I.click("//button[contains(@data-action, '" + actionName + "')]");
	},

	close() {
		this.clickButton("control#save");
	},
	
	clickFormatButton() {
		this.clickButton("#format");
	},
	
	clickFormatBoldButton() {
		this.clickButton("format#bold");
	},
	
	toggleBold() {
		this.clickFormatButton();
		this.clickFormatBoldButton();
	},
	
	type(text) {
		I.type(text);
	}
}