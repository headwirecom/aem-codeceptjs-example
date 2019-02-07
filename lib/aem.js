const fs = require("fs");
const request = require("request");

const packmgrServicePath = "/crx/packmgr/service.jsp";

const displayPackageUploadError = function(error, response, body) {
	if (!error) {
		return;
	}

	console.log("Error: ", error);
	console.log("Status Code: ", response && response.statusCode);
	console.log("Body: ", body);
};

module.exports = {

	installPackage: function(instance, packagePath) {
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

		return request.post(packmgrServiceUrl, options, displayPackageUploadError);
	}
	
}