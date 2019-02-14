const I = require("../custom_steps.js")();

const locators = {
	popover: locate(".granite-shell-onboarding-popover")
		.as("Onboarding Popover"),
	button: locate(".granite-shell-onboarding-popover button")
		.as("Close Onboarding Button")
};

module.exports = {
	async dismiss() {
        return new Promise(async function(resolve) {
            let count = await I.grabNumberOfVisibleElements(locators.popover);
            if (count > 0) {
				I.click(locators.button);
            }

            resolve();
        });
	}
}
