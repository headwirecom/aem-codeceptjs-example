const srcPath = "./src/";
const basePath = srcPath + "main/";
const pagesPath = basePath + "pages/";

const page = function(name) {
	return pagesPath + name + ".js";
};

const aem = require("./aem.config.js");

module.exports = function() {
	return {
		getUrl() {
			return aem.url;
		},

		getIncludes() {
			return {
				I: basePath + "custom_steps.js",
				loginPage: page("Login"),
				startPage: page("Start"),
				sitesPage: page("Sites"),
				createPageWizardPage: page("CreatePageWizard"),
				editorPage: page("Editor")
			  };
		}
	};
}
