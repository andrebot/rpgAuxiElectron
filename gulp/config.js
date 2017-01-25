'use strcit';

module.exports = {
  materializecss: 'node_modules/materialize-css/dist/**/*',
  srcFolder: 'src/',
  testFiles: 'test/**/*.spec.js',
  jsLibs: [
    'node_modules/jquery/dist/jquery.min.js',
    'node_modules/jquery/dist/jquery.min.map',
    'node_modules/hammerjs/hammer.min.js',
    'node_modules/hammerjs/hammer.min.js.map',
    'node_modules/js-autocomplete-tremby/auto-complete.js'
  ],
  cssLibs: [
    'node_modules/js-autocomplete-tremby/auto-complete.css',
    'icons/material-icons.css'
  ],
  fontLibs: [
    'icons/material-icons.woff2'
  ]
};
