const I = require("../custom_steps.js")();

module.exports = {

	root: locate("coral-cyclebutton").withAttr({ "data-granite-collection-switcher-target": ".cq-siteadmin-admin-childpages"}).as("Switch 'Sites' View Container"),

	optionButton(text) {
		return locate(".coral3-SelectList-item")
			.inside(this.root)
			.withText(text)
			.as("Option: " + text);
	},

	clickSwitchButton() {
		// I.wait(1);
		//pause();
		I.seeElement(this.root,2);
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
