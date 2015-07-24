module.exports = function(grunt) {
    grunt.initConfig({
        less: {
            dist: {
                options: {
                    compress: true
                },
                files: {
                    "res/styles/style.css": "res/styles/importer.less"
                }
            }
        }, 

        jshint: {
            all: ['Gruntfile.js', 'res/scripts/**/*.js']
        },

        concat: {
            options: {
                separator: ';',
            },
            dist: {
                src: ['res/scripts/**/*.js'],
                dest: 'res/scripts/app.js'
            }
        },

        watch: {
            scripts: {
                files: ['res/scripts/**/*.js', 'Gruntfile.js'],
                tasks: ['jshint', 'concat']
            },

            less: {
                files: ['res/styles/**/*.less'],
                tasks: ['less']
            }
        }
    });


    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-less');

    grunt.registerTask('default', ['less', 'concat', 'jshint', 'watch']);
};