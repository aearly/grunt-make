var
  fs = require("fs"),
  exec = require("child_process").exec,
  assert = require("assert"),
  testFile = __dirname + "/example/somefile.js";

describe("grunt-make", function () {
  beforeEach(function () {
    try {
      fs.unlinkSync(testFile);
    } catch (e) {}
  });

  it("should work with a basic task name", function (done) {
    exec("grunt --gruntfile ./test/example/Gruntfile.js make:echo",
      function (err, stdout, stderr) {
        if (err) {
          console.error(stdout, stderr);
          throw err;
        }
        console.log(stdout);
        assert(stdout.indexOf("foo") > 1, "make:echo not successfully run");
        done();
      });
  });

  it("should work with a file target", function (done) {
    exec("grunt --gruntfile ./test/example/Gruntfile.js make:somefile.js",
      function (err, stdout, stderr) {
        if (err) {
          console.error(stdout, stderr);
          throw err;
        }
        console.log(stdout);
        assert(fs.existsSync(testFile), "file target not successfully run");
        done();
      });
  });

  it("should work with multiple targets", function (done) {
    exec("grunt --gruntfile ./test/example/Gruntfile.js make:echo:somefile.js",
      function (err, stdout, stderr) {
        if (err) {
          console.error(stdout, stderr);
          throw err;
        }
        console.log(stdout);
        assert(stdout.indexOf("foo") > 1, "make:echo not successfully run");
        assert(fs.existsSync(testFile), "file target not successfully run");
        done();
      });
  });
});
