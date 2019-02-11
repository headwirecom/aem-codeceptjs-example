const fs = require("fs");
const pathLib = require("path");

const config = require("../project.config.js");
const aem = require("../" + config.aem);

const projectDir = pathLib.dirname(__dirname);
const sourcesDir = pathLib.normalize(projectDir + "/" + config.sources);

module.exports = {

	getAEM() {
		return aem;
	},

	isInSources(absPath) {
		return absPath.startsWith(sourcesDir + "/");
	},

	pathUnderSources(relPath) {
		return pathLib.normalize(sourcesDir + "/" + relPath);
	},

	addVersion(absPath) {
		if (absPath && this.isInSources(absPath)) {
			let versionedPath = versionedPath.replace(sourcesDir, sourcesDir + "/" + aem.version);
			return pathLib.normalize(versionedPath);
		}

		return absPath;
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