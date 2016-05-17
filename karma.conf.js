module.exports = function(config) {
  config.set({
    browsers: ['Chrome'],

    frameworks: ['browserify', 'mocha'],

    files: [
      'src/lib/**/*.js',
      'test/**/*.js'
    ],

    preprocessors: {
      'src/lib/**/*.js': ['browserify'],
      'test/**/*.js': ['browserify']
    },

    browserify: {
      debug: true,
      insertGlobals : true,
      transform: [ ['babelify', { "presets": ["es2015"] }] ]
    },

    reporters: ['mocha']
  });
};
