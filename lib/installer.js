require("./require.js");

const aem = require("./project.js").getAEM();
const versioning = require("./versioning.js");

console.log("Working on AEM version " + aem.version);
console.log("Using the following base URL: " + aem.url + "\n");

module.exports = {
	getUrl() {
		return aem.url;
	},

	getIncludes() {
		return versioning.getIncludes();
	}
}
