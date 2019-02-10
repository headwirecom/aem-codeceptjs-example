const srcPath = "./src/";
const basePath = srcPath + "main/";
const pagesPath = basePath + "pages/";

const aem = require("./aem.config.js");

const pagePath = function(name) {
	return pagesPath + name + ".js";
};

const loginPagePath = pagePath("Login");
const startPagePath = pagePath("Start");

const getLoginPage = function() {
	return require(loginPagePath);
};

const getStartPage = function() {
	return require(startPagePath);
};

module.exports = function() {
	return {
		getUrl() {
			return aem.url;
		},

		getIncludes() {
			return {
				I: basePath + "custom_steps.js",
				loginPage: loginPagePath,
				startPage: startPagePath,
				sitesPage: pagePath("Sites"),
				createPageWizardPage: pagePath("CreatePageWizard"),
				editorPage: pagePath("Editor")
			};
		}
	};
}
