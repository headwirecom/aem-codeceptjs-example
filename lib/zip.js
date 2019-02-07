const fs = require("fs");
const JSZip = require("jszip");

const addFolderContentsToZip = function(folderPath, zip) {
	let names = fs.readdirSync(folderPath);
	for (let i = 0; i < names.length; i++) {
		let name = names[i];
		let path = folderPath + "/" + name;
		let stat = fs.lstatSync(path);
		if (stat.isDirectory()) {
			addFolderContentsToZip(path, zip.folder(name));
		} else {
			zip.file(name, fs.readFileSync(path));
		}
	}
}

module.exports = {

	zipFolderContent: function(path) {
		let zip = new JSZip();
		addFolderContentsToZip(path, zip);
		return zip;
	}

}
