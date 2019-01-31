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

	clickSwitchButton() {
		I.seeElement(locators.root, 2);
		I.click(locators.root);
	},

	switchTo(text) {
		this.clickSwitchButton();
		I.click(locators.optionButton(text));
	},

	switchToListView() {
		this.switchTo("List View");
	}
}
