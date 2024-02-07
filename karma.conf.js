module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-coverage'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    jasmineHtmlReporter: {
      suppressAll: true // removes the duplicated traces
    },
    customLaunchers: {
      ChromeHeadlessCI: {
        base: 'ChromeHeadless',
        flags: [
          '--no-sandbox',
          '--disable-gpu',
          // Remove '--headless' since it's redundant for ChromeHeadless.
          '--disable-translate',
          '--disable-extensions',
          '--remote-debugging-port=9222' // Optional for remote debugging
        ]
      }
    },
    browsers: ['ChromeHeadlessCI'], // Use ChromeHeadlessCI for CI environment
    singleRun: true, // Set to true if you want Karma to start and finish without waiting for input/output
    restartOnFileChange: true,
  });
};
