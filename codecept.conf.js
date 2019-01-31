const basePath = './src/main/';
const pagesPath = basePath + 'pages/';

exports.config = {
  tests: './src/test/*.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'http://localhost:4502',
	  show: true,
	  restart: false,
      waitForNavigation: [ "domcontentloaded", "networkidle0" ],
      chrome: {
        args: ['--start-maximized', '--window-size=1280,968'],
        defaultViewport: {
          width: 1280,
          height: 960
        }
	  }
    }
  },
  include: {
    I: basePath + 'custom_steps.js',
	loginPage: pagesPath + 'Login.js',
	startPage: pagesPath + 'Start.js',
	sitesPage: pagesPath + 'Sites.js',
	createPageWizardPage: pagesPath + 'CreatePageWizard.js',
	editorPage: pagesPath + 'Editor.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'codeceptjs'
}
