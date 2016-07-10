(function() {
  var SaloosEtaskATask, SaloosEtaskATaski, SaloosTaskATask, SaloosTaskATaski, SaloosTaskArgs, SaloosTaskExit, _saloosTasks, saloosTasks,
    slice = [].slice;

  SaloosTaskExit = false;

  SaloosTaskATask = new Array();

  SaloosTaskATaski = new Object();

  SaloosEtaskATask = new Array();

  SaloosEtaskATaski = new Object();

  SaloosTaskArgs = new Object();

  saloosTasks = (function() {
    var _;

    function saloosTasks() {}

    _ = saloosTasks;

    saloosTasks.prototype.task = function(_name, _fn) {
      var arg;
      arg = Array.prototype.slice.call(arguments, 2, arguments.length);
      SaloosTaskATaski[_name] = SaloosTaskATask.length;
      return SaloosTaskATask.push({
        name: _name,
        fn: _fn,
        args: arg
      });
    };

    saloosTasks.prototype.endtask = function(_name, _fn) {
      var arg;
      arg = Array.prototype.slice.call(arguments, 2, arguments.length);
      SaloosEtaskATaski[_name] = SaloosEtaskATask.length;
      return SaloosEtaskATask.push({
        name: _name,
        fn: _fn,
        args: arg
      });
    };

    saloosTasks.prototype.run = function(_from) {
      var argv, i, j, k, l, ref, ref1, ref2, ref3, ref4, results, ret, start;
      SaloosTaskExit = true;
      if (!_from) {
        start = 0;
      } else {
        start = SaloosTaskATaski[_from];
      }
      for (i = k = ref = start, ref1 = SaloosTaskATask.length - 1; ref <= ref1 ? k <= ref1 : k >= ref1; i = ref <= ref1 ? ++k : --k) {
        if (!SaloosTaskATask[i]) {
          continue;
        }
        argv = SaloosTaskArgs[SaloosTaskATask[i].name] ? SaloosTaskArgs[SaloosTaskATask[i].name] : false;
        ret = (ref2 = SaloosTaskATask[i].fn).call.apply(ref2, [_, argv].concat(slice.call(SaloosTaskATask[i].args)));
        if (ret) {
          SaloosTaskArgs[ret.name] = ret.args;
        }
      }
      results = [];
      for (j = l = 0, ref3 = SaloosEtaskATask.length - 1; 0 <= ref3 ? l <= ref3 : l >= ref3; j = 0 <= ref3 ? ++l : --l) {
        if (!SaloosEtaskATask[j]) {
          continue;
        }
        argv = SaloosTaskArgs[i] ? SaloosTaskArgs[i] : false;
        ret = (ref4 = SaloosEtaskATask[j].fn).call.apply(ref4, [_, argv].concat(slice.call(SaloosEtaskATask[j].args)));
        results.push(SaloosTaskArgs[ret.name] = ret.args);
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
