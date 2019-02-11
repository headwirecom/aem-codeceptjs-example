const aem = require("../aem.config.js");
require("./require.js").override(aem.version);
const versioning = require("./versioning.js");

module.exports = {
	getUrl() {
		return aem.url;
	},

	getIncludes() {
		return versioning.getIncludes(aem.version);
	}
}
