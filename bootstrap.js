const fs = require("fs");
const zipFolderContent = require("./lib/zip.js").zipFolderContent;
const aemLib = require("./lib/aem.js");
const project = require("./project.config.js");

module.exports = function(done) {
	project.ensureTempFolder();
	let zipPath = "./" + project.getContentZipFilePath();
	console.log("Creating test content package '" + zipPath + "'.");
	let zip = zipFolderContent("./" + project.contentFolder);
	aemLib.pipeZipToPackageFile(zip, zipPath)
	.on("finish", function() {
		let aem = require("./aem.config.js");
		console.log("Uploading the package to '" + aem.url + "'.");
		aemLib.installPackage(zipPath, aem, function() {
			console.log("Removing test content package.");
			fs.unlink(zipPath, error => { });
			done();
		});
	});
}
