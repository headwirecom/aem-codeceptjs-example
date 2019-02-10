const fs = require("fs");
const mainPagesLocation = "./src/main/pages";

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
	return "./src/main/" + version + "/pages";;
};

module.exports = {
	getIncludes(version) {
		let includes = getIncludes(pagesVersionedPath(version));
		let pages = fs.readdirSync(mainPagesLocation);
		for (let i = 0; i < pages.length; i++) {
			let fileName = pages[i];
			let pageName = fileNameToPageName(fileName);
			if (!includes[pageName]) {
				includes[pageName] = mainPagesLocation + "/" + fileName;
			}
		}

		return includes;
	}
}
