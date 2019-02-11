const I = require("../custom_steps.js")();
const onboardingOverlay = require("../fragments/OnboardingOverlay.js");
const userPopupFragment = require("../fragments/UserPopup.js");

module.exports = {

	locators: {
		userIcon: locate(".coral-Icon--userCircleColor")
			.as("User Icon")
	},

	dismissOnboarding: async function() {
        // need to wait in case the onboarding dialog shows up
        I.wait(1);
		return onboardingOverlay.dismiss();
	},

	clickUserButton() {
		I.click(this.locators.userIcon);
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
