const installer = require("./lib/installer.js");

exports.config = {
  tests: "./src/test/*.js",
  output: "./output",
  helpers: {
    Puppeteer: {
      url: installer.getUrl(),
	  show: true,
	  restart: false,
      waitForNavigation: [ "domcontentloaded", "networkidle2" ],
      chrome: {
        args: ["--start-maximized", "--window-size=1280,960"],
        defaultViewport: {
          width: 1280,
          height: 960
        }
	  }
    }
  },
  include: installer.getIncludes(),
  bootstrap: "bootstrap.js",
  teardown: "teardown.js",
  mocha: {},
  name: "codeceptjs"
}
