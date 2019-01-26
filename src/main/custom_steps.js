module.exports = function() {
  return actor({

	amOnAuthor: function(path = "") {
		if (!path.startsWith("/")) {
			path = "/" + path;
		}

		this.amOnPage("http://localhost:4502" + path);
	},

	signIn: function(username = "admin", password = "admin") {
		this.see("Sign In", "#sign-in-title");
		this.fillField("#username", username);
		this.fillField("#password", password);
		this.pressKey("Enter");
	}

  });
}
