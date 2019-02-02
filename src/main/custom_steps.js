module.exports = function() {
	return actor({

		type(text) {
			for (var i = 0; i < text.length; i++) {
			  this.pressKey(text.charAt(i));
			}
		},

		press(key, times = 1) {
			for (var i = 0; i < times; i++) {
			  this.pressKey(key);
			}
		},

		pressEnter(times = 1) {
			this.press("Enter", times);
		},

		pressTab(times = 1) {
			this.press("Tab", times);
		},

		pressRight(times = 1) {
			this.press("ArrowRight", times);
		},

		pressDown(times = 1) {
			this.press("ArrowDown", times);
		},

		waitForAnimation() {
			this.wait(1);
		}
	});
}
