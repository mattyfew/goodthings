var gulp = require('gulp'),
  uglify = require('gulp-uglify'),
  sass = require('gulp-sass'),
  concat = require('gulp-concat');

var paths = {
  'bower': './public/assets/bower',
  'assets': './public/assets'
}

gulp.task('scripts', function() {
  gulp.src([
    paths.bower + '/jquery/dist/jquery.js',
    paths.bower + '/foundation/js/foundation.js',
    paths.assets + '/js/main.js'
    // './public/assets/bower/foundation/js/foundation.alert.js',
    // '!public/assets/js/*.min.js'
  ])
    .pipe(concat('app.js'))
    .pipe(gulp.dest(paths.assets + '/js'));

    return gulp.src(paths.bower + '/modernizr/modernizr.js')
      .pipe(gulp.dest('./public/assets/js'))
});

gulp.task('styles', function() {
   gulp.src([paths.assets + '/sass/main.scss'])
    .pipe(sass({
      includePaths: [paths.bower + '/foundation/scss']
    }))
    .pipe(concat('main.css'))
    .pipe(gulp.dest(paths.assets + '/css'))
})


gulp.task('watch', function() {
  gulp.watch(paths.assets + '/js/**/*.js', ['scripts']);
  gulp.watch(paths.assets + '/sass/**/*.scss', ['styles']);
});

gulp.task('default', ['scripts', 'styles']);




// gulp.task('scripts', function() {
//   gulp.src(['public/assets/js/*.js', '!public/assets/js/*.min.js'])
//     .pipe(rename({suffix: '.min'}))
//     .pipe(uglify())
//     .pipe(gulp.dest('public/assets/js'));
// });
