(function() {
  var i, runtest, saloosTask;

  saloosTask = require('../../bin/index.js');

  global.myTest = new Object();

  saloosTask.task("hello", function() {
    return global.myTest.Hello = true;
  });

  saloosTask.task("my", function() {
    return global.myTest.My = true;
  });

  saloosTask.task("iran", function() {
    return global.myTest.Iran = true;
  });

  require('./secondTest.js');

  saloosTask.run();

  runtest = 0;

  for (i in global.myTest) {
    if (global.myTest[i] === true) {
      runtest++;
    }
  }

  if (runtest === 4) {
    console.log("4 test passed");
  } else {
    console.log("bug!!!!!!!");
  }

}).call(this);
