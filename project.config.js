const fs = require("fs");

module.exports = {
	contentFolder: "content",
	tempFolder: "target",
	tempPagesRoot: "/content/we-retail/language-masters/en/tests",

	// TODO the below methods should not be in config,
	// let's find a better division of responsibility later.
	ensureTempFolder: function() {
		let path = "./" + this.tempFolder;
		if (!fs.existsSync(path)) {
			console.log("Creating temporary folder '" + path + "'.");
			fs.mkdirSync(path, { recursive: true });
		}

		return path;
	},

	getContentZipFileName: function() {
		return this.contentFolder + ".zip";
	},

	getContentZipFilePath: function() {
		return this.tempFolder + "/" + this.getContentZipFileName();
	}
}