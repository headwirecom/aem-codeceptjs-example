const fs = require("fs");
const basecodeLocation = "./src/main/";
const mainPagesLocation = basecodeLocation + "pages";

const fileNameToPageName = function(fullFileName) {
	let fileName = fullFileName.split(".")[0];
	let firstLetter = fileName.charAt(0).toLowerCase();
	let remainder = fileName.substring(1, fileName.length);
	return firstLetter + remainder + "Page";
};

const getIncludes = function(pagesFolder) {
	let includes = {};
	fs.readdirSync(pagesFolder).forEach(fileName => {
		includes[fileNameToPageName(fileName)] = pagesFolder + "/" + fileName;
	});
	return includes;
};

const pagesVersionedPath = function(version) {
	return basecodeLocation + version + "/pages";;
};

module.exports = {
	getIncludes(version) {
		let mainIncludes = getIncludes(mainPagesLocation);
		if (!version) {
			return mainIncludes;
		}

		let versionIncludes = getIncludes(pagesVersionedPath(version));
		return Object.assign(mainIncludes, versionIncludes);
	}
}
