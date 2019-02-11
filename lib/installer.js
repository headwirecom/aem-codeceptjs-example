require("./require.js");

const aem = require("./project.js").getAEM();
const versioning = require("./versioning.js");

module.exports = {
	getUrl() {
		return aem.url;
	},

	getIncludes() {
		return versioning.getIncludes(aem.version);
	}
}
