const installer = require("./installer.js")();

exports.config = {
  tests: "./src/test/*.js",
  output: "./output",
  helpers: {
    Puppeteer: {
      url: "http://localhost:4502",
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
  bootstrap: null,
  mocha: {},
  name: "codeceptjs"
}
