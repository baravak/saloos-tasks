(function() {
  var saloosTask, v;

  saloosTask = require('../../bin/index.js');

  v = 10;

  saloosTask.task("second", function() {
    return global.myTest.Hi = arguments[0][0];
  });

}).call(this);
