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
  include: includes,
  bootstrap: null,
  mocha: {},
  name: "codeceptjs"
}
