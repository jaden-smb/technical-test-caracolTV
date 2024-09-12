const gulp = require('gulp');
const less = require('gulp-less');
const browserSync = require('browser-sync').create();
const path = require('path');

// Compile LESS to CSS
gulp.task('less', function() {
    return gulp.src('src/styles/styles.less')  // Updated path
        .pipe(less())
        .pipe(gulp.dest('build/css'))          // Updated output path
        .pipe(browserSync.stream());
});

// Serve and watch
gulp.task('serve', function() {
    browserSync.init({
        server: './'
    });

    gulp.watch('src/styles/**/*.less', gulp.series('less')); // Updated watch path
    gulp.watch('*.html').on('change', browserSync.reload);
    gulp.watch('src/scripts/**/*.js').on('change', browserSync.reload); // Updated watch path
});

gulp.task('default', gulp.series('less', 'serve'));
