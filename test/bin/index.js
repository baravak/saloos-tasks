(function() {
  var i, runtest, saloosTask;

  saloosTask = require('../../bin/index.js');

  global.myTest = new Object();

  saloosTask.task("hello", function() {
    global.myTest.Hello = true;
    return {
      name: "second",
      args: [true]
    };
  });

  saloosTask.task("my", function(r, a1) {
    return global.myTest.My = a1;
  }, true);

  saloosTask.task("iran", function(r, a1, a2) {
    return global.myTest.Iran = a2;
  }, false, true);

  require('./secondTest.js');

  saloosTask.run();

  runtest = 0;

  for (i in global.myTest) {
    if (global.myTest[i] === true) {
      runtest++;
    } else {
      console.log("bug in " + i);
    }
  }

  if (runtest === 4) {
    console.log("4 test passed");
  } else {
    console.log("bug!!!!!!!");
  }

}).call(this);
