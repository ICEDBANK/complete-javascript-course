const gulp = require('gulp');
const git = require('gulp-git');
const watch = require('gulp-watch');
const debounce = require('lodash.debounce');

// Task to commit changes
gulp.task('commit-changes', function() {
    return gulp.src('.')
        .pipe(git.commit('Automated commit'));
});

// Task to push changes to remote repository
gulp.task('push-changes', function(cb) {
    git.push('origin', 'master', cb);
});

// Debounced commit and push function
const debouncedCommitAndPush = debounce(function() {
    console.log('Debounced function called. Waiting for debounce delay...');
    gulp.series('commit-changes', 'push-changes')();
}, 1 * 60 * 500); // 1 minutes debounce time

// Watch task to trigger commit and push after a debounce period
gulp.task('watch', function() {
    watch(['src/**/*.html', 'src/**/*.css', 'src/**/*.js'], function() {
        console.log('Change detected. Triggering debounce...');
        debouncedCommitAndPush();
    });
});

// Default task to start watching for changes
gulp.task('default', gulp.series('watch'));
