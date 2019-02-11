const fs = require("fs");
const Module = require("module");
const originalRequire = Module.prototype.require;

const requireFragment = function(version) {
	return function(name) {
		let versionedFragment = "../src/main/" + version + "/fragments/" + name + ".js";
		if (fs.existsSync(versionedFragment)) {
			return originalRequire(versionedFragment);
		}

		return originalRequire("../src/main/fragments/" + name + ".js")
	}
};

module.exports = {
    override(version) {
		Module.prototype.require = function() {
			const id = arguments[0];
			if (id) {
				return originalRequire.apply(this, arguments);
			}

			return {
				fragment: requireFragment(version)
			};
		};
    }
}