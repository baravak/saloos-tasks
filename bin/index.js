(function() {
  var _saloosTasks, saloosTasks;

  saloosTasks = (function() {
    var _;

    function saloosTasks() {}

    saloosTasks.exit = false;

    saloosTasks.aTask = new Array();

    saloosTasks.aTaski = new Object();

    _ = saloosTasks;

    saloosTasks.prototype.task = function(_name, _fn) {
      _.aTaski[_name] = _.aTask.length;
      return _.aTask.push({
        name: _name,
        fn: _fn
      });
    };

    saloosTasks.prototype.run = function(_from) {
      var i, j, ref, ref1, results, start;
      _.exit = true;
      if (!_from) {
        start = 0;
      } else {
        start = _.aTaski[_from];
      }
      results = [];
      for (i = j = ref = start, ref1 = _.aTask.length - 1; ref <= ref1 ? j <= ref1 : j >= ref1; i = ref <= ref1 ? ++j : --j) {
        results.push(_.aTask[i].fn());
      }
      return results;
    };

    return saloosTasks;

  })();

  _saloosTasks = new saloosTasks;

  process.on('exit', function() {
    if (_saloosTasks.exit) {
      return null;
    }
    return _saloosTasks.run(process.argv[2]);
  });

  module.exports = _saloosTasks;

}).call(this);
