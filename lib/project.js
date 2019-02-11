const fs = require("fs");
const config = require("../project.config.js");

module.exports = {

	getAEM() {
		return require("../" + config.aem);
	},

	ensureTempFolder() {
		let path = "./" + config.tempFolder;
		if (!fs.existsSync(path)) {
			console.log("Creating temporary folder '" + path + "'.");
			fs.mkdirSync(path, { recursive: true });
		}

		return path;
	},

	getContentFolderPath() {
		return config.contentFolder;
	},

	getContentZipFileName() {
		return this.getContentFolderPath() + ".zip";
	},

	getContentZipFilePath() {
		return config.tempFolder + "/" + this.getContentZipFileName();
	}
}