var gulp = require('gulp');

//压缩js代码
var uglify = require('gulp-uglify');

//合并js文件
var concat = require('gulp-concat');

//混淆js代码
var obfuscate = require('gulp-obfuscate');

var paths = {
    scripts: ['index1.js', 'index2.js', 'index3.js']
};

gulp.task('default', function(){

       gulp.src(paths.scripts)
           .pipe(obfuscate({ replaceMethod: obfuscate.ZALGO }))
           .pipe(uglify())
           .pipe(concat('all.min.js'))
           .pipe(gulp.dest('build'));
    }
);