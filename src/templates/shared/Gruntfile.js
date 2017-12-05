'use strict';
var coverage = require('./coverage.json');

module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        jshint: {
            files: ['src/**/*.js'],
            options: {
                jshintrc: true,
                force: false,
                reporter: require('jshint-stylish')
            }
        },
        mocha_istanbul: {
            coverage: {
                src: 'test',
                options: {
                    coverageFolder: 'coverage',
                    mask: '**/*.js',
                    root: 'src/'
                }
            }
        },
        istanbul_check_coverage: {
            default: {
                options: {
                    coverageFolder: 'coverage*', // will check both coverage folders and merge the coverage results
                    check: coverage
                }
            }
        },
        githooks: {
            all: {
                // Will create `./git/hooks/pre-commit` file which will be used at every commit,
                // so that to run the `jshint` and `test:unit` tasks before commit really happen.
                'pre-commit': 'mocha_istanbul:coverage jshint',
              }
          }
    });

    grunt.registerTask('lint', ['jshint']);    
    grunt.registerTask('test', ['mocha_istanbul:coverage']);
    grunt.registerTask('coverage', ['istanbul_check_coverage:default']);
    grunt.registerTask('default', ['lint', 'test', 'coverage']);   
};
