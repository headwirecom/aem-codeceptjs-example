const I = require("../custom_steps.js")();
const onboardingOverlay = require().fragment("OnboardingOverlay");
const userPopupFragment = require().fragment("UserPopup");

const locators = {
	userIcon: locate(".coral-Icon--userCircleColor")
		.as("User Icon")
};

module.exports = {

	dismissOnboarding: async function() {
        // need to wait in case the onboarding dialog shows up
        I.wait(1);
		return onboardingOverlay.dismiss();
	},

	clickUserButton() {
		I.click(locators.userIcon);
		I.waitForAnimation();
	},

	checkUser(name = "Administrator") {
		this.clickUserButton();
		userPopupFragment.checkUser(name);
		this.clickUserButton();
	},

	signOut() {
		this.clickUserButton();
		userPopupFragment.signOut();
	}
}
