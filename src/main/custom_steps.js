module.exports = function() {
  return actor({

	amOnAuthor: function() {
		this.amOnPage("http://localhost:4502");
	},

	signIn: function(username, password) {
		this.see("Sign In", "#sign-in-title");
		this.fillField("#username", username);
		this.fillField("#password", password);
		this.pressKey("Enter");
	}

  });
}
