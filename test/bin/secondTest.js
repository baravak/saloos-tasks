(function() {
  var saloosTask;

  saloosTask = require('../../bin/index.js');

  saloosTask.task("second", function() {
    return global.myTest.Hi = true;
  });

}).call(this);
