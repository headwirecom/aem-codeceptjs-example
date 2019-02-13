const fs = require("fs");
const request = require("request");

const PACKAGE_MANAGER_SERVICE_PATH = "/crx/packmgr/service.jsp";
const PRODUCT_INFO_PATH = "/system/console/status-productinfo.json";
const VERSION_REGEX = "^Adobe Experience Manager\(.*\)";

const handleResponse = function(onBody) {
	return function(error, response, body) {
		if (error) {
			console.log("Error: ", error);
			console.log("Status Code: ", response && response.statusCode);
			console.log("Body: ", body);
		}

		if (onBody) {
			onBody(response.body);
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

	installPackage: function(packagePath, instance, onBody) {
		let packmgrServiceUrl = instance.url + PACKAGE_MANAGER_SERVICE_PATH;
		let options = {
			auth: {
				user: instance.username,
				pass: instance.password
			},
			formData: {
				file: fs.createReadStream(packagePath),
				force: "true",
				install: "true"
			}
		};

		return request.post(packmgrServiceUrl, options, handleResponse(onBody));
	},

	request: function(method, instance, path, onBody) {
		return request({
			method: method,
			uri: instance.url + path,
			auth: {
				user: instance.username,
				pass: instance.password
			}
		}, handleResponse(onBody));
	},

	deleteNode: function(instance, path, onBody) {
		return this.request(
			"DELETE",
			instance,
			path,
			onBody
		);
	},

	getVersion: function(instance, onResult) {
		let onBody = function(body) {
			let lines = JSON.parse(body);
			let result;
			for (let i = 0; i < lines.length; i++) {
				let line = lines[i].trim();
				let matched = line.match(VERSION_REGEX);
				if (matched && matched.length > 0) {
					result = matched[0];
					break;
				}
			}

			if (!result) {
				onResult();
				return;
			}

			let start = result.indexOf('(');
			let end = result.indexOf(')');
			onResult(result.substring(start + 1, end));
		};

		return this.request(
			"GET",
			instance,
			PRODUCT_INFO_PATH,
			onBody
		);
	}
	
}