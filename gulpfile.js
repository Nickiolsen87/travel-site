const gulp = require('gulp'),
  postcss = require('gulp-postcss'),
  autoprefixer = require('autoprefixer'),
  cssvars = require('postcss-simple-vars'),
  nested = require('postcss-nested'),
  cssImport = require('postcss-import');

gulp.task('default', function () {
  console.log("you created a gulp task");
});

gulp.task('html', function () {
  console.log("imagine something usefull to your HTML here.");
});

gulp.task('styles', function () {
  return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
    .pipe(gulp.dest('./app/temp/styles'));
});

gulp.task('watch', function () {

  gulp.watch('./app/index.html', function () {
    gulp.start('html');
  });

  gulp.watch('./app/assets/styles/**/*.css', function () {
    gulp.start('styles');
  });
});