module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
      watch: {
        js: {
          files: ['src/js/**/*.js'],
          tasks: ['uglify'],
        },
        css: {
          files: ['src/css/**/*.css']
        }
      },
      uglify: {
        build: {
          files: [{
            src: 'src/js/**/*.js',
            dest: 'dist/js/main.min.js'  
          }]
        }  
      }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('default', ['watch', 'uglify']);

}