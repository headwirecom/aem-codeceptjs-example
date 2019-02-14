const I = require("../custom_steps.js")();

const locators = {
	sidePanelToggle: locate(".toggle-sidepanel.editor-GlobalBar-item")
		.as("Side Panel toggle button"),
	tab: function(title) {
		return locate("//coral-tab[@title='" + title + "']")
			.as(title + " tab");
	},
	component: function(title) {
		return locate("//*[@data-title='" + title + "']")
			.as("Component '" + title + "'");
	}
};

module.exports = {

	async toggleVisible() {
		return I.click(locators.sidePanelToggle);
	},

	async clickTab(title) {
		return I.click(locators.tab(title));
	},

	async clickAssetsTab() {
		return this.clickTab("Assets");
	},

	async clickComponentsTab() {
		return this.clickTab("Components");
	},

	locateComponent(name) {
		return locators.component(name);
	},

	waitForComponent(name) {
		let locator = locators.component(name);
		I.waitForVisible(locator);
		return locator;
	}
}