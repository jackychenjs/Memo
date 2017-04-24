var path = require('path'),
    config = require('./config');

var gulp = require('gulp'),
    concat = require('gulp-concat'),
    cleanCss = require('gulp-clean-css'),
    rev = require('gulp-rev'),
    revCollector = require('gulp-rev-collector'),
    babel = require('gulp-babel'),
    nodemon = require('gulp-nodemon'),
    browserSync = require('browser-sync'),
    bs = browserSync.create('My server');


/* test */
/*var domSrc = require('gulp-dom-src'),
    uglify = require('gulp-uglify'),
    cheerio = require('gulp-cheerio');*/
    

var baseDir = './',
    publicDir = './public',
    viewsDir = './views',
    filepath = {
        'css': path.join(publicDir, '/**/*.css'),
        'scss': path.join(publicDir, '/**/*.scss'),
        'js': path.join(publicDir, '/**/*.js'),
        'view': path.join(viewsDir,'/**/*.html')
    };

/* 合并静态文件*/
gulp.task('css', function(){
    gulp.src(['./public/common/*.css'])    //- 需要处理的css文件，放到一个字符串数组里
        .pipe(concat('wap.min.css'))                            //- 合并后的文件名
        .pipe(cleanCss())                                      //- 压缩处理成一行
        .pipe(rev())                                            //- 文件名加MD5后缀
        .pipe(gulp.dest('./dest'))                               //- 输出文件本地
        .pipe(rev.manifest())                                   //- 生成一个rev-manifest.json
        .pipe(gulp.dest('./rev')); 
});

gulp.task('rev', ['css'], function() {
    gulp.src(['./rev/*.json', './views/**/header.html'])   //- 读取 rev-manifest.json 文件以及需要进行css名替换的文件
        .pipe(revCollector())                                   //- 执行文件内css名的替换
        .pipe(gulp.dest('./dest/'));                     //- 替换后的文件输出的目录
});

/* webpack打包 */
var gutil = require('gulp-util'),
    webpack = require('webpack');

gulp.task('webpack', function(callback){
    webpack({
        entry: './public/demo/webpack/webpack-test1.js',
        output: {
            path: __dirname,
            filename: './public/dest/webpack-all.js'
        },
        module: {
            loaders: [
                {test: /\.css$/, loader: 'style!css'}
            ]
        },
        plugins: [
            new webpack.BannerPlugin('This file is created by Jacky')
        ]
    }, function(err, stats){
        if(err) throw new gutil.PluginError("webpack", err);
        gutil.log("[webpack]", stats.toString({
            // output options
        }));
        callback();
    })
});

/* nodemon重启服务 */
gulp.task('nodemon', function(){
    nodemon({
        script: 'server.js',
        ext: 'html js css ejs',
        ignore: ['.vscode', '.idea', 'node_modules'],
        env: {
            'NODE_ENV': 'development'
        }   
    });
});

/* browser自动刷新 */
gulp.task('browser', ['nodemon'], function () {
    bs.init(null, {
        proxy: 'http://localhost:' + config.port,
        files: [filepath.js, filepath.view, filepath.css, filepath.ejs],
        notify: false,
        open: true,
        port: 6001
    });
});

/* sass编译 */
gulp.task('sass', function() {
    gulp.src(filepath.scss)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dest'));
});

/* babel */
gulp.task('babel', function(){
    return gulp.src('src/app.js')
        .pipe(babel())
        .pipe(gulp.dest('./dest'));
});

gulp.task('dev', ['browser']);



