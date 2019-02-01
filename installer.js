const basePath = "./src/main/";
const pagesPath = basePath + "pages/";

module.exports = function() {
	return {
		getIncludes() {
			return {
				I: basePath + "custom_steps.js",
				loginPage: pagesPath + "Login.js",
				startPage: pagesPath + "Start.js",
				sitesPage: pagesPath + "Sites.js",
				createPageWizardPage: pagesPath + "CreatePageWizard.js",
				editorPage: pagesPath + "Editor.js"
			  };
		}
	};
}
