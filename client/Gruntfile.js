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
        }
    });

    grunt.registerTask('build:client', ['jshint:client']);
};