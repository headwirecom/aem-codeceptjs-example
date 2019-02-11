const aem = require("./project.js").getAEM();
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
