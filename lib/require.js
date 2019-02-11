const fs = require("fs");
const path = require("path");
const callsite = require("callsite");

const Module = require("module");
const originalRequire = Module.prototype.require;

const mainDir = path.normalize(path.dirname(__dirname) + "/src/main");

const getCallerDir = function() {
	let stack = callsite();
	// TODO '4' is quite arbitrary here, can we find a better solution?
	let requester = stack[4].getFileName();
    return path.dirname(requester);
};

const isCallerLocal = function() {
    return getCallerDir().startsWith(mainDir);
};

const getRequestedPath = function(id) {
	return path.normalize(getCallerDir() + "/" + id);
};

module.exports = {
    override(version) {
		Module.prototype.require = function() {
			let original = originalRequire.apply(this, arguments);

			const id = arguments[0];
			if (id && id.startsWith(".") && isCallerLocal()) {
				let versionedPath = getRequestedPath(id);
				versionedPath = versionedPath.replace(mainDir, mainDir + "/" + version);
				versionedPath = path.normalize(versionedPath);
				if (fs.existsSync(versionedPath)) {
					return Object.assign(original, originalRequire(versionedPath));
				}
			}

			return original;
		};
    }
}