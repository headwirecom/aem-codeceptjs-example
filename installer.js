const aem = require("./aem.config.js");
require("./lib/require.js").override(aem.version);
const versioning = require("./lib/versioning.js");

module.exports = {
	getUrl() {
		return aem.url;
	},

	getIncludes() {
		return versioning.getIncludes(aem.version);
	}
}
