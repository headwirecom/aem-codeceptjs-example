const I = require('../custom_steps.js')();

module.exports = {

	// insert your locators and methods here

	validate() {
		I.seeTitleEquals("AEM Start");

		let locator = ".globalnav-homecard-title";
		I.see("Projects", locator);
		I.see("Sites", locator);
		I.see("Experience Fragments", locator);
		I.see("Assets", locator);
		I.see("Forms", locator);
		I.see("Screens", locator);
		I.see("Personalization", locator);
		I.see("Commerce", locator);
		I.see("Communities", locator);
	},
}
