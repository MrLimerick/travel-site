var gulp = require('gulp'),
    watch = require('gulp-watch'),
    browserSync = require('browser-sync').create(); // only requires in 'create' method

gulp.task('watch', function(){

  browserSync.init ({
    notify: false,
    server: {
      baseDir: "app"
    }
  });

  watch('./app/index.html', function(){
    browserSync.reload();
  });

  watch('./app/assets/styles/**/*.css', function(){ // ** = any future hypothetical folders * = any file with .css extension
    gulp.start('cssInject');
  });
})

gulp.task('cssInject', ['styles'], function(){ // [] = dependencies i.e. tasks that should be run and complete before the function.
  return gulp.src('./app/temp/styles/styles.css')
    .pipe(browserSync.stream());
});
