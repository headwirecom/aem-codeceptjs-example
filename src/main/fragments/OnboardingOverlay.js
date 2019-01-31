const I = require("../custom_steps.js")();

module.exports = {

	dismiss() {
		// hack to dismiss the onboarding dialog if it shows up
		I.executeScript(function(done) {
			let button = $(".granite-shell-onboarding-popover button")[0];
			if(button) {
				button.click();
			}
		});
	}
}
