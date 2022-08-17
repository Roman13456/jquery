const { src, dest, series, watch } = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const browserSync = require('browser-sync').create();
const cleanCSS = require('gulp-clean-css');
function minStyle(cb) {
    src(['node_modules/lightslider/dist/css/lightslider.min.css', 'assets/css/style.css'])
    .pipe(concat('style.min.css'))
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(dest('css'))
    .pipe(browserSync.stream())
    cb();
}
function minJs(cb) {
    src(['node_modules/jquery/dist/jquery.min.js', 'node_modules/lightslider/dist/js/lightslider.min.js','assets/js/task1.js'])
    .pipe(concat('app.min.js'))
    .pipe(uglify())
    .pipe(dest('js'))
    .pipe(browserSync.stream())
    cb();
}

function watchChanges() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    watch('./assets/css/**/*.css', minStyle);
    watch('./assets/js/**/*.js', minJs);
    watch('./*.html').on('change', browserSync.reload);
}
exports.minJs = minJs;
exports.minStyle = minStyle;
exports.watch = watchChanges;
exports.default = series(minStyle,minJs,watchChanges);
