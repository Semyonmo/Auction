var gulp = require('gulp');

gulp.task('build', ['browserify', 'jade', 'less', 'images', 'assets']);