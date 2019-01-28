module.exports = function() {
  return actor({

	pressEnter: function() {
		this.pressKey("Enter");
	},

	amOnAuthor: function(path = "") {
		if (!path.startsWith("/")) {
			path = "/" + path;
		}

		this.amOnPage("http://localhost:4502" + path);
	},

	signIn: function(username = "admin", password = "admin") {
		this.fillField("#username", username);
		this.fillField("#password", password);
		this.pressEnter();
	}

  });
}