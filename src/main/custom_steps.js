module.exports = function() {
  return actor({

	amOnAuthor: function(path = "") {
		if (!path.startsWith("/")) {
			path = "/" + path;
		}

		this.amOnPage("http://localhost:4502" + path);
	},

	type: function(text) {
		for (var i = 0; i < text.length; i++) {
		  this.pressKey(text.charAt(i));
		}
	},

	press: function(key, times = 1) {
		for (var i = 0; i < times; i++) {
		  this.pressKey(key);
		}
	},

	pressEnter: function(times = 1) {
		this.press("Enter", times);
	},

	pressTab: function(times = 1) {
		this.press("Tab", times);
	},

	pressRight: function(times = 1) {
		this.press("ArrowRight", times);
	},

	pressDown: function(times = 1) {
		this.press("ArrowDown", times);
	}

  });
}
