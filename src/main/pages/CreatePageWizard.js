const I = require("../custom_steps.js")();

module.exports = {
	
	url: "/mnt/overlay/wcm/core/content/sites/createpagewizard.html",

	template(name) {
		return locate(".foundation-collection-item")
			.withText(name)
			.as("Template " + name);
	},

	pageTitleInput: locate("//input[contains(@name, './jcr:title')]").as("Page Title"),
	pageNameInput: locate("//input[contains(@name, 'pageName')]").as("Page Name"),

	validate(path = "") {
		I.seeInCurrentUrl(this.url + path);
		I.seeTitleEquals("AEM Sites | Create Page");

		I.see("Template");
		I.see("Properties");
		I.see("Create Page");
		I.see("Content Page");
	},

	open(path = "") {
		I.amOnAuthor(this.url + path);
	},

	create(templateName, title, name = "") {
		I.click(this.template(templateName));
		I.click("Next");
		I.fillField(this.pageTitleInput, title);
		I.fillField(this.pageNameInput, name);
		I.pressEnter();
	},

	validateCreated() {
		I.see("Success");
		I.see("Your page has been created.");
	}

}
