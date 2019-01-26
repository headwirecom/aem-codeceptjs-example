exports.config = {
  tests: './src/test/*.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'http://localhost:4502',
	  show: true,
      chrome: {
        defaultViewport: {
          width: 1280,
          height: 960
        }
	  }
    }
  },
  include: {
    I: './src/main/custom_steps.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'codeceptjs'
}