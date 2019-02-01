const I = require("../custom_steps.js")();

module.exports = function(path) {
	let adjustedPath = path.replace("jcr:", "_jcr_");
	let inputLocator = function(name) {
		let form = "//form[contains(@action, '" + adjustedPath + "')]";
		let input = "//input[contains(@name, './" + name + "')]";
		return locate(form + input);
	};

	return {
		submit() {
			I.click(".cq-dialog-submit");
		},

		set(name, value) {
			I.fillField(inputLocator(name), value);
		}
	}
}
