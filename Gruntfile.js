'use strict'
module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		// sass: {
		// 	dist: {
		// 		files: [{
		// 			src: 'public/assets/sass/*.scss',
		// 			dest: 'public/assets/css/main.css'
		// 		}],
		// 		options: {
		// 			includePaths: ['public/assets/bower/foundation-sites/scss/**/*.scss'],
		// 			style: 'expanded',
		// 			lineNumbers: true,
		// 			sourcemap: 'none'
		// 		}
		// 	}
		// },

		sass: {
			options: {
				includePaths: ['public/assets/bower/foundation-sites/scss']
			},

			dist: {
				options: {
					outputStyle: 'expanded'
				},
				files: [{
					src: 'public/assets/sass/*.scss',
					dest: 'public/assets/css/main.css'
				}]
			}
		},

		cssmin: {
			target: {
				files: [{
					expand: true,
					cwd: 'public/assets/css',
					src: ['*.css', '!*.min.css'],
					dest: 'public/assets/css',
					ext: '.min.css'
				}]
			}
		},

		connect: {
			server: {
				options: {
					hostname: 'localhost',
					port: 3000,
					base: 'public/app/',
					livereload: true
				}
			}
		},

		watch: {
			options: {
				spawn: false,
				livereload: true
			},
			sass: {
				files: ['public/assets/sass/main.scss', 'public/assets/bower/foundation-sites/scss/**/*.scss'],
				tasks: ['sass', 'cssmin']
			}
			// ,
			// css: {
			// 	files: ['public/assets/css/custom.css']
			// },
			// html: {
			// 	files: ['**/*.html']
			// },
			// script: {
			// 	files: ['**/*.js']
			// }
			// 	, tasks: ['csslint'], files: ['**/*.css']
		}
	});

	require('load-grunt-tasks')(grunt);
	grunt.registerTask('lint', ['csslint', 'jslint']);
	grunt.registerTask('default', ['connect', 'watch']);



};
