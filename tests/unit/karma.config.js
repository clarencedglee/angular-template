// Karma configuration
// Generated on Wed Nov 04 2015 17:29:45 GMT+0000 (GMT)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine', 'jasmine-matchers'],


    // list of files / patterns to load in the browser
    files: [
      '../../bower_components/jquery/dist/jquery.js',
      '../../bower_components/angular/angular.min.js',
      '../../bower_components/angular-ui-router/release/angular-ui-router.js',
      '../../src/app.js',
      '../../src/**/*.js',
      '../../src/**/*.html',
      'specs/**/*Spec.js'
    ],


    // list of files to exclude
    exclude: [
      '**/*.swp',
      '**/*.swo'
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    //preprocessors: {
    //  '../../src/angular/**/*.html': ['ng-html1js'],
    //},

    //ngHtml2JsPreprocessor: {

    //  //stripPrefix: 'angular/shared/',
    //  cacheIdFromPath: function(filepath){
    //    //remove angular/<anything-not-forward-slash>/ from beginning of path
    //    var regex = /^angular\/[^/]*\//;
    //    //console.log( filepath.replace(regex, '') );
    //    return  filepath.replace(regex, '');
    //  },

    //  //mdake templates available in tests with beforeEach(module('testTemplates'))
    //  moduleName: 'testTemplates'
    //},


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultanous
    concurrency: Infinity
  })
}
