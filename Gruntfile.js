'use strict';

module.exports = function (grunt) {

    //Load downstream files, and pass the grunt config.
    require('./client/Gruntfile')(grunt);
    require('./server/Gruntfile')(grunt);


    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.registerTask('build', ['jshint']);

};