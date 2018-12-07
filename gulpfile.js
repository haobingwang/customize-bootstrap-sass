var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-csso');
var pug = require('gulp-pug');

// source and distribution folder
var source = 'src/';
var dest = 'dist/';

// Bootstrap scss source
var bootstrapSass = { 
    in: './node_modules/bootstrap-sass/'
};

// Bootstrap fonts source
var fonts = { 
    in: [
        source + 'fonts/*.*', 
        bootstrapSass.in + 'assets/fonts/**/*'
    ],
    out: dest + 'fonts/'
};

// Our scss source folder: .scss files
var scss = { in: source + 'scss/main.scss',
    out: dest + 'css/',
    watch: source + 'scss/**/*',
    sassOpts: {
        outputStyle: 'nested',
        precison: 3,
        errLogToConsole: true,
        includePaths: [bootstrapSass.in + 'assets/stylesheets'] // this will tell gulp-sass where to import scss files.
    }
};

// copy bootstrap required fonts to dest
gulp.task('fonts', function () {
    return gulp
        .src(fonts.in)
        .pipe(gulp.dest(fonts.out));
});

// compile scss
// before executing sass task gulp will automatically run fonts task firstly.
gulp.task('sass', ['fonts'], function () {
    return gulp.src(scss.in)
        .pipe(sass(scss.sassOpts))
        .pipe(minifyCSS())
        .pipe(gulp.dest(scss.out));
});

gulp.task('html', function () {
    return gulp.src('src/templates/*.pug')
        .pipe(pug())
        .pipe(gulp.dest('dist'))
});

// default task
gulp.task('default', ['html', 'sass'], function () {
    gulp.watch(scss.watch, ['sass']);
});