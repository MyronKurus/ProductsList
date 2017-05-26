/**
 * Created by Innokentii on 08.10.2016.
 */
module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            /*angular application*/
            angularApp: {
                src: ['app/*.js','app/*/*.js'],
                dest: 'client/js/app.js'
            },
            /*angular core and modules*/
            angularAndModules: {
                src: ['node_modules/angular/angular.js','node_modules/angular-route/angular-route.js'],
                dest: 'client/js/angular.js'
            },
            /*styles*/
            styles: {
                src: ['styles/*.css'],
                dest: 'client/css/style.css'
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-concat');

    // Default task(s).
    grunt.registerTask('default', ['watch','concat']);

};