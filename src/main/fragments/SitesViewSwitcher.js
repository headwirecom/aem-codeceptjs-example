const I = require("../custom_steps.js")();

module.exports = {

	root: "#granite-collection-switcher-toggle",

	// insert your locators and methods here

	switchToListView() {
		I.click(this.root);
		I.waitForVisible(".granite-collection-switcher .coral3-SelectList", 5);
		I.pressTab();
		I.pressDown(2);
		I.pressEnter();
	},
}
