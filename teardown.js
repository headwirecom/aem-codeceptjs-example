const output = require('codeceptjs').output;

const aemLib = require("./lib/aem.js");
const project = require("./lib/project.js");
const aem = project.getAEM();

module.exports = function(done) {
	output.print("\n\nDeleting package from AEM instance.");
	aemLib.deleteNode(aem, "/etc/packages/" + project.getContentZipFileName(), function() {
		output.print("Deleting test content from AEM instance.");
		aemLib.deleteNode(aem, project.getTempPagesRoot(), done);
	});
}
