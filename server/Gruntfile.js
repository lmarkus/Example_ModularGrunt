'use strict';
module.exports = function (grunt) {

    grunt.config.merge({
        jshint: {
            server: {
                src: [__dirname + '/index.js'],
                options: {
                    jshintrc: '.jshintrc'
                }
            }
        }
    });

    grunt.registerTask('build:server', ['jshint:server']);
};