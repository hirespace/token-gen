/**
 * Gulp automated tasks
 */

const gulp = require('gulp');

require('babel-core/register');
require('babel-polyfill');

import { exec } from 'child_process';
import gutil from 'gulp-util';

var paths = {
  test: 'test/**/*.js',
  lib: 'src/lib/**/*.js',
  // bin: 'src/bin/token-gen.js',
  tmp: 'dist/tmp',
  dist: 'dist',
  distCommonJS: 'dist/commonjs',
  distStandalone: 'dist/standalone',
  distLegacyMeteor: 'dist/legacy-meteor'
}

// Tests
/******************************************************************************/

const mocha = require('gulp-mocha');

gulp.task('test', () => {
  return gulp
    .src(paths.test, { read: false })
    .pipe(mocha({
      reporter: 'spec',
      compilers: {
        js: 'babel-core/register'
      }
    }));
});

// Karma (Ease debugging and cross-browser testing)
var Server = require('karma').Server;

// Run test once with Karma
gulp.task('test-karma', function (done) {
  new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done).start();
});

/// Watch for file changes and rerun
gulp.task('tdd', function (done) {
  new Server({
    configFile: __dirname + '/karma.conf.js'
  }, done).start();
});


// Docs
/******************************************************************************/

gulp.task('docs', () => {
  exec('jsdoc -d ./docs ./lib/', (err, stdout, stderr) => {
    if (stdout) console.log(stdout);
    if (stderr) console.log(stderr);
    if (err) console.log(err);
    gutil.log(gutil.colors.cyan('Documentation generated in ./docs/!'));
  });
})

// Build
/******************************************************************************/

import babel from 'gulp-babel';
import chmod from 'gulp-chmod';
import rename from 'gulp-rename';
const browserify = require('gulp-browserify');

gulp.task('build', [
  'build-lib',
  // 'build-bin'
]);

// Build CLI
/******************************************************************************/
//
// gulp.task('build-bin', () => {
//   return gulp.src(paths.bin)
//     .pipe(babel({ presets: ['es2015'] }))
//     .pipe(rename({ extname: '' }))
//     .pipe(chmod(755))
//     .pipe(gulp.dest(`${paths.dist}/bin`));
// });

// Build the library
/******************************************************************************/

gulp.task('build-lib', [
  'build-clean',
  'build-lib-transpile',
  'build-lib-standalone',
  'build-lib-legacy-meteor'
]);

// Babel
//
gulp.task('build-lib-transpile', ['build-clean'], () => {
  return gulp.src(paths.lib)
    .pipe(babel({ presets: ['es2015'] }))
    .pipe(gulp.dest(paths.distCommonJS));
});

// Browserify
//
gulp.task('build-lib-standalone', ['build-clean', 'build-lib-transpile'], () => {
  return gulp.src(`${paths.distCommonJS}/token-gen.js`)
    .pipe(browserify({
		  insertGlobals : true,
      standalone: 'TokenGen'
    }))
    .pipe(gulp.dest(paths.distStandalone));
  }
);

// Legacy Meteor build
//
gulp.task('build-lib-legacy-meteor', ['build-clean', 'build-lib-transpile'], () => {
  return gulp.src(`${paths.distCommonJS}/legacy-meteor.js`)
    .pipe(browserify({
		  insertGlobals : true
    }))
    .pipe(rename({ basename: 'token-gen' }))
    .pipe(gulp.dest(paths.distLegacyMeteor));
  }
);

// Clean dist folder
//
const del = require('del');

gulp.task('build-clean', (callback) => {
  return del([`${paths.dist}/**/*`, paths.dist], callback);
});
