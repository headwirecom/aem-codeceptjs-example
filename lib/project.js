const fs = require("fs");
const path = require("path");

const config = require("../project.config.js");
const aem = require("../" + config.aem);

const projectDir = path.dirname(__dirname);
const sourcesDir = path.normalize(projectDir + "/" + config.sources);

module.exports = {

	getAEM() {
		return aem;
	},

	isInSources(path) {
		return path.startsWith(sourcesDir + "/");
	},

	addVersion(path) {
		if (path && this.isInSources(path)) {
			let versionedPath = versionedPath.replace(sourcesDir, sourcesDir + "/" + aem.version);
			return path.normalize(versionedPath);
		}

		return path;
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
	},

	getTempPagesRoot() {
		return config.tempPagesRoot;
	}
}