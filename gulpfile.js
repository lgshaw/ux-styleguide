var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('sass', function(){
  return gulp.src('app/scss/styles.scss')
    .pipe(sass()) // Using gulp-sass
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('dev', ['sass', 'browserSync'], function(){
    // Gulp watch syntax
    gulp.watch('app/scss/**/*.scss', ['sass']);
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/partials/*.html', browserSync.reload);
    gulp.watch('app/js/**/*.js', browserSync.reload);
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'app'
    },
  })
});

gulp.task('build', function(){
   return gulp.src('app/css/**/*.css')
   .pipe(gulp.dest('dist/css'))
});
