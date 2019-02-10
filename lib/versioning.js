const fs = require("fs");
const aem = require("../aem.config.js");

const includes = {};

function fileNameToPageName(name) {
	let objName = name.split(".")[0];
	let pageObjName = objName.charAt(0).toLowerCase() + objName.substring(1, objName.length) + "Page";
	return pageObjName;
}

function init() {
	const pagesVersionPath = "./src/main/"+aem.version+"/pages";

	const pages = fs.readdirSync("./src/main/pages")
	const pagesVersion = fs.readdirSync(pagesVersionPath)

	for(let i = 0; i < pagesVersion.length; i++) {
		includes[fileNameToPageName(pagesVersion[i])] = (pagesVersionPath + "/" + pagesVersion[i])
	}
	for(let i = 0; i < pages.length; i++) {
		if(!pagesVersion[fileNameToPageName(pages[i])]) {
			includes[fileNameToPageName(pages[i])] = ("./src/main/pages/" + pages[i])
		}
	}
}

init();

module.exports = {
	getIncludes() {
		return includes;
	}
}
