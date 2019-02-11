const aem = require("../aem.config.js");
const versioning = require("./versioning.js");
require("./require.js").override(aem.version);

module.exports = {
	getUrl() {
		return aem.url;
	},

	getIncludes() {
		return versioning.getIncludes(aem.version);
	}
}
