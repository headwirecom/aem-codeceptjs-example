const I = require("../custom_steps.js")();

const locators = {
	submit: locate(".cq-dialog-submit")
		.as("Submit button"),

	root(path) {
		return locate("//form[contains(@action, '" + path + "')]")
			.as("Dialog form Root");
	},

	input(rootPath, name) {
		return locate("//input[contains(@name, './" + name + "')]")
			.inside(this.root(rootPath))
			.as("Input for '" + name + "'");
	}
};

module.exports = function(path) {
	let adjustedPath = path.replace("jcr:", "_jcr_");
	let inputLocator = function(name) {
		return locators.input(adjustedPath, name);
	};

	return {
		submit() {
			I.click(locators.submit);
		},

		set(name, value) {
			I.fillField(inputLocator(name), value);
		}
	}
}
