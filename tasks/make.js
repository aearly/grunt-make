var
  exec = require("child_process").exec;

module.exports = function (grunt) {
  grunt.registerTask("make", "automatically call Make targets", function () {
    var done = this.async(),
      numTargets = arguments.length;

    function targetDone() {
      numTargets -= 1;
      if (numTargets === 0) {
        done();
      }
    }

    [].forEach.call(arguments, function (target) {
      exec("make " + target, function (err, stdout) {
        if (err) { done(err); }
        console.log(stdout);
        targetDone();
      });
    });
  });
};
