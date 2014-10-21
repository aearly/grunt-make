# grunt-make [![Build Status via Travis CI](https://travis-ci.org/aearly/grunt-make.svg?branch=master)](https://travis-ci.org/aearly/grunt-make) [![NPM version](http://img.shields.io/npm/v/grunt-make.svg)](https://www.npmjs.org/package/grunt-make)

wat

Ease interoperability between Grunt and Make.  Creates a "make" task that  will automatically call the relevant target in your Makefile based on the arguments.

For more musings on why you would possibly want to do this, check out: <http://aeflash.com/2014-10/make.html>



## Usage

```js
grunt.loadNpmTasks("grunt-make");
//or
require("load-grunt-tasks")(grunt);
```

There is no configuration for the task itself.  You would use the target in other compound tasks or as the target of a watcher.

For example, if you're building Sass with a grunt-contrib-watch, but you have you build configured with make, this is all you need to do in your Gruntfile:

```js
//…
watch: {
  styles: {
    files: "styles/*.scss",
    task: "make:styles" // <--
  }
}
//…
```

...if your Makefile contains this:

```make
styles: dist/css/main.css

dist/css/main.css: styles/*.scss
  node-sass styles/main.scss $@
```

You can also target files:

```js
    //…
    task: "make:dist/css/main.css"
    //…
```

You can also specify many Make targets by separating them with colons:

```js
gunt.registerTask("allthethings", ["make:styles:scripts:lint:doc:publish"]);
```


## License

MIT
