const aemLib = require("./lib/aem.js");

const project = require("./project.config.js");
const aem = require("./aem.config.js");

aemLib.deleteNode(aem, project.tempPagesRoot);
aemLib.deleteNode(aem, "/etc/packages/" + project.getContentZipFileName());