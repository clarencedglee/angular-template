var gulp = require('gulp');
var sass = require('gulp-sass');
var minifycss = require('gulp-minify-css');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var templateCache = require('gulp-angular-templatecache');

// compile sass and minify css

gulp.task('sass', function(){
  gulp.src('./sass/main.scss')
    .pipe(sass())
    .pipe(minifycss({keepBreaks:false}))
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1'))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./dist/css/'));
});

// concatenate js (later will replace with require js )

// TODO: concate 3rd party librarys

gulp.task('concat_js', function(){
  gulp.src([
    './bower_components/angular/angular.min.js',
    './bower_components/angular-ui-router/release/angular-ui-router.min.js',
    './angular/app.js',
    './angular/**/*.js',
    './angular/**/**/*.js'
  ])
  .pipe(uglify())
  .pipe(concat('main.js'))
  .pipe(gulp.dest('./dist/js/'));
});

// angular template cache

gulp.task('template_cache', function () {
  gulp.src([
    './angular/**/*.html'
  ])
  .pipe(templateCache({
    module : 'app'
  }))
  .pipe(gulp.dest('./dist/cache/templates'));
});

// watchers

gulp.task('watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
  gulp.watch('./angular/**/*.js', ['concatJs']);
});

// default
gulp.task('default', ['sass', 'watch' , 'concat_js', 'template_cache' ]);
