const I = require("../custom_steps.js")();
const userPopupFragment = require("../fragments/UserPopup.js");

module.exports = {

	userIcon: locate(".coral3-Icon--userCircleColor").as("User Icon"),

	clickUserButton() {
		I.click(this.userIcon);
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
