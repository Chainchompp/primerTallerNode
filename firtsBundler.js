var fs = require("fs");
var browserify = require("browserify");
browserify("./src/ImportES6.js")
  .transform("babelify", {presets: ["@babel/preset-env"]})
  .bundle()
  .pipe(fs.createWriteStream("dist/bundle.js"));