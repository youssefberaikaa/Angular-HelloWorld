module.exports = function(config) {
    config.set({
      frameworks: ['jasmine', '@angular-devkit/build-angular'],
      browsers: ['Chrome', 'ChromeHeadless', 'ChromeHeadlessCI'],
      customLaunchers: {
        ChromeHeadlessCI: {
            base: 'ChromeHeadless',
            flags: ['--headless', '--disable-gpu', '--no-sandbox', '--disable-translate', '--disable-extensions']
        }
    },
      files: [
        { pattern: './src/**/*.spec.ts', watched: false },
      ],
      preprocessors: {
        './src/**/*.spec.ts': ['@angular-devkit/build-angular'],
      },
      // Other configuration options...
    });
  };