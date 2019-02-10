const aem = require("./aem.config.js");

const srcPath = "./src/";
const basePath = srcPath + "main/";
const pagesPath = basePath + "pages/";

const pagePath = function(name) {
	return pagesPath + name + ".js";
};

const loginPagePath = pagePath("Login");
const startPagePath = pagePath("Start");

const includes = {
	I: basePath + "custom_steps.js",
	loginPage: loginPagePath,
	startPage: startPagePath,
	sitesPage: pagePath("Sites"),
	createPageWizardPage: pagePath("CreatePageWizard"),
	editorPage: pagePath("Editor")
};

module.exports = {
	getUrl() {
		return aem.url;
	},

	getIncludes() {
		return includes;
	}
}
