const I = require("../custom_steps.js")();

module.exports = {

	root: locate("#granite-collection-switcher-toggle")
		.as("Switch 'Sites' View Container"),

	optionButton(text) {
		return locate(".coral3-SelectList-item")
			.inside(this.root)
			.withText(text)
			.as("Option: " + text);
	},

	clickSwitchButton() {
		I.click(this.root);
	},

	switchTo(text) {
		this.clickSwitchButton();
		I.click(this.optionButton(text));
	},

	switchToListView() {
		this.switchTo("List View");
	},
}
