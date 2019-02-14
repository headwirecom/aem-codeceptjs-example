const fs = require("fs");
const output = require('codeceptjs').output;

const zipFolderContent = require("./lib/zip.js").zipFolderContent;
const aemLib = require("./lib/aem.js");
const project = require("./lib/project.js");
const aem = project.getAEM();

module.exports = function(done) {
	aemLib.getVersion(aem, result => {
		output.debug(aem.url + " says that it runs AEM " + result);
	});

	project.ensureTempFolder();
	let zipPath = project.getContentZipFilePath();
	output.print("Creating test content package '" + zipPath + "'.");
	let zip = zipFolderContent(project.getContentFolderPath());
	aemLib.pipeZipToPackageFile(zip, zipPath)
	.on("finish", function() {
		output.print("Uploading the package to '" + aem.url + "'.");
		aemLib.installPackage(zipPath, aem, function() {
			output.print("Deleting test content package.\n\n");
			fs.unlink(zipPath, error => { });
			done();
		});
	});
}
