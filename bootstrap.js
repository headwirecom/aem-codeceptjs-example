const fs = require("fs");
const JSZip = require("jszip");
const installPackage = require("./lib/aem.js").installPackage;

const zipDirectory = function(zip, rootPath) {
	let names = fs.readdirSync(rootPath);
	for (let i = 0; i < names.length; i++) {
		let name = names[i];
		let path = rootPath + "/" + name;
		let stat = fs.lstatSync(path);
		if (stat.isDirectory()) {
			zipDirectory(zip.folder(name), path);
		} else {
			zip.file(name, fs.readFileSync(path));
		}
	}
};

let project = require("./project.config.js");
let contentPath = "./" + project.contentFolder;
const targetPath = "./" + project.tempFolder;
const zipPath = targetPath + "/" + project.contentFolder + ".zip";

if (!fs.existsSync(targetPath)) {
	console.log("Creating temporary folder '" + targetPath + "'.");
	fs.mkdirSync(targetPath, { recursive: true });
}

let zip = new JSZip();
console.log("Creating test content package '" + zipPath + "'.");
zipDirectory(zip, contentPath);
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