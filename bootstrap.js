const fs = require("fs");
const contentFolder = "content";
const contentPath = "./" + contentFolder;
const targetPath = "./target";
const zipPath = targetPath + "/" + contentFolder + ".zip";

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

let zip = new require("jszip")();
zipDirectory(zip, contentPath);
if (!fs.existsSync(targetPath)) {
	fs.mkdirSync(targetPath);
}

zip.generateNodeStream({
	type: "nodebuffer",
	streamFiles: true,
	compression: "DEFLATE"
})
.pipe(fs.createWriteStream(zipPath));