exports.config = {
  tests: './src/test/*.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'http://localhost:4502',
	  show: false,
      chrome: {
        defaultViewport: {
          width: 1280,
          height: 960
        }
	  }
    }
  },
  include: {
    I: './src/main/custom_steps.js',
	loginPage: './src/main/pages/Login.js',
	startPage: './src/main/pages/Start.js',
	sitesPage: './src/main/pages/Sites.js',
	createPageWizardPage: './src/main/pages/CreatePageWizard.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'codeceptjs'
}
