const fs = require("fs");
const request = require("request");

const packmgrServicePath = "/crx/packmgr/service.jsp";

const displayRequestError = function(done) {
	return function(error, response, body) {
		if (error) {
			console.log("Error: ", error);
			console.log("Status Code: ", response && response.statusCode);
			console.log("Body: ", body);
		}

		if (done) {
			done();
		}
	};
};

module.exports = {

	pipeZipToPackageFile(zip, filePath) {
		return zip.generateNodeStream({
			type: "nodebuffer",
			streamFiles: true,
			compression: "DEFLATE"
		}).pipe(fs.createWriteStream(filePath));
	},

installPackage: function(packagePath, instance, done) {
		let packmgrServiceUrl = instance.url + packmgrServicePath;
		let options = {
			auth: {
				user: instance.user,
				pass: instance.password
			},
			formData: {
				file: fs.createReadStream(packagePath),
				force: "true",
				install: "true"
			}
		};

		return request.post(packmgrServiceUrl, options, displayRequestError(done));
	},

	deleteNode: function(instance, path, done) {
		return request({
			method: "DELETE",
			uri: instance.url + path,
			auth: {
				user: instance.user,
				pass: instance.password
			}
		}, displayRequestError(done));
	}
	
}