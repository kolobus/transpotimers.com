module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // Compile SASS files into minified CSS.
        sass: {
            options: {
                includePaths: ['js/bootstrap-sass/assets/stylesheets']
            },
            dist: {
                options: {
                    outputStyle: 'compressed'
                },
                files: {
                    'css/transpotimers.css': 'css/sass/transpotimers/bootstrap.scss'
                }
            }
        },

        // Watch these files and notify of changes.
        watch: {
            grunt: { files: ['Gruntfile.js'] },

            sass: {
                files: [
                    'css/sass/**/*.scss'
                ],
                tasks: ['sass']
            }
        }
    });

    // Load externally defined tasks.
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Establish tasks we can run from the terminal.
    grunt.registerTask('build', ['sass']);
    grunt.registerTask('default', ['build', 'watch']);
}
