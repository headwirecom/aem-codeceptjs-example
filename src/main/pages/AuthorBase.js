const I = require("../custom_steps.js")();
const userPopupFragment = require("../fragments/UserPopup.js");

module.exports = {

	locators: {
		user: locate(".coral3-Icon--userCircleColor").as("User")
	},

	clickUserButton() {
		I.click(this.locators.user);
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
