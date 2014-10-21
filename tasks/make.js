var
  exec = require("child_process").exec;

module.exports = function (grunt) {
  grunt.registerTask("make", "automatically call Make targets", function () {
    var done = this.async();

    exec("make " + [].join.call(arguments, " "), function (err, stdout) {
      if (err) { done(err); }
      console.log(stdout);
      done();
    });
  });
};
