module.exports = function() {
	return actor({

		async ensureUrl(path) {
			return this.waitInUrl(path, 2);
		},

		async type(text) {
			for (var i = 0; i < text.length; i++) {
				await this.pressKey(text.charAt(i));
			}
		},

		async press(key, times = 1) {
			for (var i = 0; i < times; i++) {
				await this.pressKey(key);
			}
		},

		async pressEnter(times = 1) {
			return this.press("Enter", times);
		}
	});
}
