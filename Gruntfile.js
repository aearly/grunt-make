module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    release: {
      options: {
        npm: false
      }
    }
  });

  grunt.loadNpmTasks("grunt-release");
};
