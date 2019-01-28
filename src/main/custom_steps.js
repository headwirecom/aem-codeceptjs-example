module.exports = function() {
  return actor({

	type: function(text) {
		for (var i = 0; i < text.length; i++) {
		  this.pressKey(text.charAt(i));
		}
	},

	pressEnter: function() {
		this.pressKey("Enter");
	},

	pressTab: function(times = 1) {
		for (var i = 0; i < times; i++) {
		  this.pressKey("Tab");
		}
	},

	pressRight: function(times = 1) {
		for (var i = 0; i < times; i++) {
		  this.pressKey("ArrowRight");
		}
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