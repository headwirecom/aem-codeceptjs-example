const I = require("../custom_steps.js")();

const url = "/editor.html";

const extension = ".html";
appendExtension = function(path) {
	if (!path || path.endsWith(extension)) {
		return path;
	}

	return path + extension;
};

getUrl = function(path) {
	return url + appendExtension(path);
};

module.exports = {

	validate(path = "") {
		I.seeInCurrentUrl(getUrl(path));
		I.see("Edit");
		I.see("Preview");
	},

	open(path = "") {
		I.amOnAuthor(getUrl(path));
	}
}
