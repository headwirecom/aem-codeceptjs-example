const fs = require("fs");
const Module = require("module");
const originalRequire = Module.prototype.require;

const requireObject = function(aemVersion, objectType) {
	return function(name) {
		let versionedObject = "../src/main/" + aemVersion + "/" + objectType + "/" + name + ".js";
		if (aemVersion && fs.existsSync(versionedObject)) {
			return originalRequire(versionedObject);
		}

		return originalRequire("../src/main/" + objectType + "/" + name + ".js")
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
				page: requireObject(version, "pages"),
				fragment: requireObject(version, "fragments")
			};
		};
    }
}