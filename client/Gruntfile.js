'use strict';
module.exports = function (grunt) {

    grunt.config.merge({
        jshint: {
            client: {
                src: [__dirname + '/clients.js'],
                options: {
                    jshintrc: '.jshintrc'
                }
            }
        },
        'bower-install-simple': {

            options: {
                color: true,
                cwd: __dirname + '/'
            },
            'prod': {
                options: {
                    production: true
                }
            },
            'dev': {
                options: {
                    production: false
                }
            }

        }

    });

    grunt.loadNpmTasks('grunt-bower-install-simple');
    grunt.registerTask('bower-install:client', ['bower-install-simple:prod']);
    grunt.registerTask('build:client', ['bower-install:client', 'jshint:client']);
};