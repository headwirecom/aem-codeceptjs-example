const aem = require("./aem.config.js");
const versioning = require("./lib/versioning.js");

module.exports = {
	getUrl() {
		return aem.url;
	},

	getIncludes() {
		return versioning.getIncludes();
	}
}
