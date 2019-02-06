const fs = require("fs");
const JSZip = require("jszip");
const request = require("request");
const packmgrServicePath = "/crx/packmgr/service.jsp";

const zipDirectory = function(zip, rootPath) {
	let names = fs.readdirSync(rootPath);
	for (let i = 0; i < names.length; i++) {
		let name = names[i];
		let path = rootPath + "/" + name;
		let stat = fs.lstatSync(path);
		console.log(path);
		if (stat.isDirectory()) {
			zipDirectory(zip.folder(name), path);
		} else {
			zip.file(name, fs.readFileSync(path));
		}
	}
};

const displayPackageUploadError = function(error, response, body) {
	if (!error) {
		return;
	}

	console.log("Error: ", error);
	console.log("Status Code: ", response && response.statusCode);
	console.log("Body: ", body);
}

const installPackage = function(url, user, password) {
	let packmgrServiceUrl = url + packmgrServicePath;
	let options = {
		auth: {
			user: user,
			pass: password
		},
		formData: {
			file: fs.createReadStream(zipPath),
			force: "true",
			install: "true"
		}
	};
	return request.post(packmgrServiceUrl, options, displayPackageUploadError);
}

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
	installPackage(aem.url, aem.user, aem.password);
	done = true;
});