var gulp = require('gulp');
var devGulpTasks = require('grommet/utils/gulp/gulp-tasks');
var path = require('path');

var opts = {
  copyAssets: [
    'src/index.html',
    {
      asset: 'src/img/**',
      dist: 'public/img/'
    }
  ],
  jsAssets: ['src/js/**/*.js'],
  mainJs: 'src/js/index.js',
  mainScss: 'src/scss/index.scss',
  devServerPort: 9000,
  dist: path.resolve(process.cwd(), 'public')
};

devGulpTasks(gulp, opts);
