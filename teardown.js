const aemLib = require("./lib/aem.js");

const project = require("./project.config.js");
const aem = require("./aem.config.js");

module.exports = function(done) {
	console.log("\n\nDeleting package from AEM instance.");
	aemLib.deleteNode(aem, "/etc/packages/" + project.getContentZipFileName(), function() {
		console.log("Deleting test content from AEM instance.");
		aemLib.deleteNode(aem, project.tempPagesRoot, done);
	});
}
