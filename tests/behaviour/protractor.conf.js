exports.config = {
  // set to "custom" instead of cucumber. 
  framework: 'custom',
 
  // path relative to the current config file 
  frameworkPath: require.resolve('protractor-cucumber-framework'),

  // Spec patterns are relative to this directory.
  specs: [
    './specs/*.feature'
  ],

  cucumberOpts: {
    require: './definitions/**/*.def.js',
    format: 'pretty'
  }
};

