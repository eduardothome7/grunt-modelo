module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
      concat: {
        js: {
          src: ['src/js/jquery.js', 'src/js/navbar.js'],
            dest: 'dist/main.js',
          },
        css:{
          src: ['src/css/footer.css', 'src/css/navbar.css'],
          dest: 'dist/style.css',
        },
      },
      watch: {
        js: {
          files: ['src/js/**/*.js'],
          tasks: ['concat:js'],
        },
        css: {
          files: ['src/css/**/*.css'],
          tasks: ['concat:css'],
        }
      },
      uglify: {
        js: {
          files: ['src/js/**/*.js'],
          tasks: ['concat:js'],
        },
        css: {
          files: ['src/css/**/*.css'],
          tasks: ['concat:css'],
        }
      }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('default', ['concat','watch', 'uglify']);

}