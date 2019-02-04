module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
      watch: {
        js: {
          files: ['src/js/**/*.js'],
          tasks: ['uglify'],
        },
        css: {
          files: ['src/scss/**/*.scss'],
          tasks: ['sass', 'cssmin']
        },
      },
      uglify: {
        build: {
          files: [{
            src: 'src/js/**/*.js',
            dest: 'dist/js/main.min.js'  
          }]
        }  
      },
      sass: {
        dist: {
          files: {
            'dist/css/style.css': ['src/scss/main.scss']
          }
        }
      },
      cssmin: {
        options: {
          mergeIntoShorthands: false,
          roundingPrecision: -1
        },
        target: {
          files: {
            'dist/css/style.min.css': 'dist/css/style.css'
          }
        }
      },
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('default', ['watch', 'uglify', 'sass', 'cssmin']);

}