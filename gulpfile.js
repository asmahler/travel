var gulp = require('gulp'),
   watch = require('gulp-watch');

gulp.task('default', function(){
	console.log('gulp task done');
});

gulp.task('html', function () { 
	console.log('html task')
});

gulp.task('styles', function () { 
	console.log('sass tasks runnings')
});



gulp.task('watch', function () {
	watch('index.html', function () {
		gulp.start('html');
	});

	watch('assets/styles/**/*.css', function () {
		gulp.start('styles');
	});

});