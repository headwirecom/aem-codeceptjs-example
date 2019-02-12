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

	toggleVisible() {
		I.click(locators.sidePanelToggle);
	},

	clickTab(title) {
		I.click(locators.tab(title));
	},

	clickAssetsTab() {
		this.clickTab("Assets");
	},

	clickComponentsTab() {
		this.clickTab("Components");
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