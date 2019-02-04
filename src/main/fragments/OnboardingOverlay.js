const I = require("../custom_steps.js")();

module.exports = {

	locators: {
		"onboarding": locate(".granite-shell-onboarding-popover button")
	},

	dismiss: function() {
		I.click(this.locators.onboarding);
	}
}
