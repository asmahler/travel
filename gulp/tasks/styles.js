var autoprefixer = require('autoprefixer'), 
 	   cssImport = require('postcss-import'), 
 	     postcss = require('gulp-postcss'), 
 	     cssvars = require('postcss-simple-vars'),
 	     nested  = require('postcss-nested'), 
 	        gulp = require('gulp');
  
 
gulp.task('styles', function () { 
	return gulp.src('./app/assets/styles/style.css')
	.pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
	.on('error', function (errorInfo){
		console.log(errorInfo.toString());
		this.emit('end');
	})
	.pipe(gulp.dest('./app/temp/styles'));

});

