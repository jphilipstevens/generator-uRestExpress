'use strict';

module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.initConfig({
        jshint: {
            all: ['Gruntfile.js','src/**/*.js'],
            options: {
                jshintrc: '.jshintrc',
                jshintignore: '.jshintignore',
                reporter: require('jshint-stylish')
            }
        }
    });
};