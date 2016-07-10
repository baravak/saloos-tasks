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

  saloosTask.run(0);

  console.log(global.myTest);

  runtest = 0;

  for (i in global.myTest) {
    if (global.myTest[i] === true) {
      runtest++;
    }
  }

  if (runtest === 3) {
    console.log("3 test passed");
  } else {
    console.log("bug!!!!!!!");
  }

}).call(this);
