const I = require("../custom_steps.js")();

const url = "/mnt/overlay/wcm/core/content/sites/createpagewizard.html";

const locators = {
	pageTitleInput: locate("//input[contains(@name, './jcr:title')]")
		.as("Page Title"),
	pageNameInput: locate("//input[contains(@name, 'pageName')]")
		.as("Page Name"),

	template(name) {
		return locate(".foundation-collection-item")
			.withText(name)
			.as("Template " + name);
	}
};

module.exports = {

	validate(path = "") {
		I.seeInCurrentUrl(url + path);

		I.seeInTitle("AEM Sites");
		I.seeInTitle("Create Page");

		I.see("Template");
		I.see("Properties");
		I.see("Create Page");
		I.see("Content Page");
	},

	open(path = "") {
		I.amOnPage(url + path);
	},

	create(templateName, title, name = "") {
		I.click(locators.template(templateName));
		I.click("Next");
		I.fillField(locators.pageTitleInput, title);
		I.fillField(locators.pageNameInput, name);
		I.pressEnter();
	},

	validateCreated() {
		I.see("Success");
		I.see("Your page has been created.");
	}

}
