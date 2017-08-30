// This file isn't transpiled, so use Common JS and ES5

// Register babel to transpile before tests run.
require('babel-register')();

// Disable webpack features that Mocha doesn't understand.
require.extensions['.css'] = function() {};
