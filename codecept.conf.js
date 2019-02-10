const installer = require("./installer.js");

const includes = installer.getIncludes();
const url = installer.getUrl();

exports.config = {
  tests: "./src/test/*.js",
  output: "./output",
  helpers: {
    Puppeteer: {
      url: url,
	  show: true,
	  restart: false,
      waitForNavigation: [ "domcontentloaded", "networkidle0" ],
      chrome: {
        args: ["--start-maximized", "--window-size=1280,968"],
        defaultViewport: {
          width: 1280,
          height: 960
        }
	  }
    }
  },
  include: includes,
  bootstrap: "bootstrap.js",
  teardown: "teardown.js",
  mocha: {},
  name: "codeceptjs"
}
