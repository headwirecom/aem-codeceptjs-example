const fs = require("fs");
const zipFolderContent = require("./lib/zip.js").zipFolderContent;
const installPackage = require("./lib/aem.js").installPackage;

let project = require("./project.config.js");
let contentPath = "./" + project.contentFolder;
const targetPath = "./" + project.tempFolder;
const zipPath = targetPath + "/" + project.contentFolder + ".zip";

if (!fs.existsSync(targetPath)) {
	console.log("Creating temporary folder '" + targetPath + "'.");
	fs.mkdirSync(targetPath, { recursive: true });
}

console.log("Creating test content package '" + zipPath + "'.");
let zip = zipFolderContent(contentPath);
zip.generateNodeStream({
	type: "nodebuffer",
	streamFiles: true,
	compression: "DEFLATE"
})
.pipe(fs.createWriteStream(zipPath))
.on("finish", function() {
	let aem = require("./aem.config.js");
	console.log("Uploading the package to '" + aem.url + "'.");
	installPackage(aem, zipPath);
});