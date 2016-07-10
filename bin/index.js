(function() {
  var SaloosEtaskATask, SaloosEtaskATaski, SaloosTaskATask, SaloosTaskATaski, SaloosTaskExit, _saloosTasks, saloosTasks;

  SaloosTaskExit = false;

  SaloosTaskATask = new Array();

  SaloosTaskATaski = new Object();

  SaloosEtaskATask = new Array();

  SaloosEtaskATaski = new Object();

  saloosTasks = (function() {
    var _;

    function saloosTasks() {}

    _ = saloosTasks;

    saloosTasks.prototype.task = function(_name, _fn) {
      SaloosTaskATaski[_name] = SaloosTaskATask.length;
      return SaloosTaskATask.push({
        name: _name,
        fn: _fn
      });
    };

    saloosTasks.prototype.endtask = function(_name, _fn) {
      SaloosEtaskATaski[_name] = SaloosEtaskATask.length;
      return SaloosEtaskATask.push({
        name: _name,
        fn: _fn
      });
    };

    saloosTasks.prototype.run = function(_from) {
      var i, j, k, l, ref, ref1, ref2, results, start;
      SaloosTaskExit = true;
      if (!_from) {
        start = 0;
      } else {
        start = SaloosTaskATaski[_from];
      }
      for (i = k = ref = start, ref1 = SaloosTaskATask.length - 1; ref <= ref1 ? k <= ref1 : k >= ref1; i = ref <= ref1 ? ++k : --k) {
        SaloosTaskATask[i].fn();
      }
      results = [];
      for (j = l = 0, ref2 = SaloosEtaskATask.length - 1; 0 <= ref2 ? l <= ref2 : l >= ref2; j = 0 <= ref2 ? ++l : --l) {
        results.push(SaloosEtaskATask[j].fn());
      }
      return results;
    };

    return saloosTasks;

  })();

  _saloosTasks = new saloosTasks;

  process.on('exit', function() {
    if (SaloosTaskExit) {
      return null;
    }
    return _saloosTasks.run(process.argv[2]);
  });

  module.exports = _saloosTasks;

}).call(this);
