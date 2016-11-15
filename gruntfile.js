module.exports = (grunt) => {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    watch: {
      options: {
        atBegin: true
      },
      browserify: {
        files: ['src/**/*.js'],
        tasks: ['browserify']
      }
    },

    browserify: {
      dist: {
        options: {
          transform: [
            ['babelify', {presets: ['es2015']}]
          ]
        },
        src: ['src/moo.js'],
        dest: 'dist/bundle.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browserify');

  grunt.registerTask('default', ['browserify']);
};
