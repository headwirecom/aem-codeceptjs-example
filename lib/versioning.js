const fs = require("fs");
const path = require("path");

const project = require("./project.js");
const aem = project.getAEM();
const mainPagesLocation = project.pathUnderSources("pages");

const fileNameToPageName = function(fullFileName) {
	let fileName = fullFileName.split(".")[0];
	let firstLetter = fileName.charAt(0).toLowerCase();
	let remainder = fileName.substring(1, fileName.length);
	return firstLetter + remainder + "Page";
};

const getIncludes = function(pagesFolder) {
	let includes = {};
	fs.readdirSync(pagesFolder).forEach(fileName => {
		let id = fileNameToPageName(fileName);
		includes[id] = path.normalize(pagesFolder + "/" + fileName);
	});
	return includes;
};

module.exports = {
	getIncludes() {
		let mainIncludes = getIncludes(mainPagesLocation);
		if (!aem.version) {
			return mainIncludes;
		}

		let pagesVersionedPath = project.addVersion(mainPagesLocation);
		let versionIncludes = getIncludes(pagesVersionedPath);
		return Object.assign(mainIncludes, versionIncludes);
	}
}
