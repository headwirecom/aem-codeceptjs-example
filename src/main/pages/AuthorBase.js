const I = require("../custom_steps.js")();
const onboardingOverlay = require("../fragments/OnboardingOverlay.js");
const userPopupFragment = require("../fragments/UserPopup.js");

module.exports = {

	locators: {
		userIcon: locate(".coral-Icon--userCircleColor")
			.as("User Icon")
	},

	async dismissOnboarding() {
		return onboardingOverlay.dismiss();
	},

	async clickUserButton() {
		return I.click(this.locators.userIcon);
	},

	async checkUser(name = "Administrator") {
		await this.clickUserButton();
		await userPopupFragment.checkUser(name);
		return this.clickUserButton();
	},

	async signOut() {
		await this.clickUserButton();
		return userPopupFragment.signOut();
	}
}
