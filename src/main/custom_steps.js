const fs = require('fs')
const aem = require('../../aem.config.js')

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
		},

		requireFragment(name) {

			if(fs.existsSync('./'+aem.version+'/fragments/'+name+'.js')) {
				return require('./'+aem.version+'/fragments/'+name+'.js');
			}
			return require('./fragments/'+name+'.js')

		}
	});
}
