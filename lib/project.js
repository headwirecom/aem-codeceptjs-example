const fs = require("fs");
const config = require("../project.config.js");
console.log(config);
module.exports = {

	ensureTempFolder: function() {
		let path = "./" + config.tempFolder;
		if (!fs.existsSync(path)) {
			console.log("Creating temporary folder '" + path + "'.");
			fs.mkdirSync(path, { recursive: true });
		}

		return path;
	},

	getContentFolderPath: function() {
		return config.contentFolder;
	},

	getContentZipFileName: function() {
		return this.getContentFolderPath() + ".zip";
	},

	getContentZipFilePath: function() {
		return config.tempFolder + "/" + this.getContentZipFileName();
	}
}