require("./require.js");

const output = require("codeceptjs").output;

const aem = require("./project.js").getAEM();
const versioning = require("./versioning.js");

output.print("Working on AEM version " + aem.version);
output.print("Using the following base URL: " + aem.url + "\n");

module.exports = {
	getUrl() {
		return aem.url;
	},

	getIncludes() {
		return versioning.getIncludes();
	}
}
