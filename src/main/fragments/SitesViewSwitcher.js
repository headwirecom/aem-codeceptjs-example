const I = require("../custom_steps.js")();

const locators = {
	root: locate("coral-cyclebutton")
		.withAttr({ "data-granite-collection-switcher-target": ".cq-siteadmin-admin-childpages"})
		.as("Switch 'Sites' View Container"),

	optionButton(text) {
		return locate(".coral3-SelectList-item")
			.inside(this.root)
			.withText(text)
			.as("Option: " + text);
	}	
};

module.exports = {

	async clickSwitchButton() {
		I.seeElement(locators.root, 2);
		return I.click(locators.root);
	},

	async switchTo(text) {
		await this.clickSwitchButton();
		return I.click(locators.optionButton(text));
	},

	async switchToListView() {
		return this.switchTo("List View");
	}
}
