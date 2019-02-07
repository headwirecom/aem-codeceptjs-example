const installer = require("./installer.js")();

exports.config = {
  tests: "./src/test/*.js",
  output: "./output",
  helpers: {
    Puppeteer: {
      url: installer.getUrl(),
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
  include: installer.getIncludes(),
  bootstrap: "bootstrap.js",
  teardown: "teardown.js",
  mocha: {},
  name: "codeceptjs"
}
