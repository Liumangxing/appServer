const {
    src,
    watch,
    dest
} = require('gulp');
var ts = require('gulp-typescript');

var tsProject = ts.createProject('tsconfig.json');

function tsc() {
    return Promise.resolve(src('./server/*.ts').pipe(tsProject()).pipe(dest('./build')));
};

function watchTsc() {
    watch('./server/*.ts', {
        ignoreInitial: false
    }, tsc);
};

exports.default = watchTsc;