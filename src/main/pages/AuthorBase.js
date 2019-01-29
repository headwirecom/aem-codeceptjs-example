const I = require("../custom_steps.js")();

module.exports = {

	locators: {
		"user": locate('.coral3-Icon--userCircleColor').as('User')
	},

	clickUserButton() {
		I.click(this.locators['user']);
	},

	checkUser(name = "Administrator") {
		this.clickUserButton();
		I.see(name);
		this.clickUserButton();
	},

	signOut() {
		this.clickUserButton();
		I.click('Sign Out');
	}

}
