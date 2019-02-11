const fs = require("fs");
const path = require("path");
const callsite = require("callsite");

const Module = require("module");
const originalRequire = Module.prototype.require;

const project = require("./project.js");

const getCallerDir = function() {
	let stack = callsite();
	// TODO '4' is quite arbitrary here, can we find a better solution?
	let requester = stack[4].getFileName();
    return path.dirname(requester);
};

const isCallerLocal = function() {
    return project.isInSources(getCallerDir());
};

const getRequestedPath = function(id) {
	return path.normalize(getCallerDir() + "/" + id);
};

Module.prototype.require = function() {
	let original = originalRequire.apply(this, arguments);

	const id = arguments[0];
	if (id && id.startsWith(".") && isCallerLocal()) {
		let versionedPath = getRequestedPath(id);
		versionedPath = project.addVersion(versionedPath);
		if (fs.existsSync(versionedPath)) {
			return Object.assign(original, originalRequire(versionedPath));
		}
	}

	return original;
};