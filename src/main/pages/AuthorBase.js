const I = require("../custom_steps.js")();
const userPopupFragment = require("../fragments/UserPopup.js");

const locators = {
	userIcon: locate(".coral-Icon--userCircleColor")
		.as("User Icon")
};

module.exports = {

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
