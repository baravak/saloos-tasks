SaloosTaskExit		= false
SaloosTaskATask		= new Array()
SaloosTaskATaski	= new Object()
SaloosEtaskATask	= new Array()
SaloosEtaskATaski	= new Object()
SaloosTaskArgs		= new Object()
class saloosTasks
	_		= @
	# constructor: (options) ->
	task : (_name, _fn) ->
		arg = Array.prototype.slice.call(arguments, 2, arguments.length)
		SaloosTaskATaski[_name] = SaloosTaskATask.length
		SaloosTaskATask.push {name : _name, fn : _fn, args: arg}

	endtask : (_name, _fn) ->
		arg = Array.prototype.slice.call(arguments, 2, arguments.length)
		SaloosEtaskATaski[_name] = SaloosEtaskATask.length
		SaloosEtaskATask.push {name : _name, fn : _fn, args: arg}

	run  : (_from) ->
		SaloosTaskExit = true
		if !_from
			start = 0
		else
			start = SaloosTaskATaski[_from]

		for i in [start .. (SaloosTaskATask.length-1)]
			if !SaloosTaskATask[i]
				continue
			argv = if SaloosTaskArgs[SaloosTaskATask[i].name] then SaloosTaskArgs[SaloosTaskATask[i].name] else false
			ret = SaloosTaskATask[i].fn.call(_,argv, SaloosTaskATask[i].args...)
			if ret
				SaloosTaskArgs[ret.name] = ret.args

		for j in [0 .. (SaloosEtaskATask.length-1)]
			if !SaloosEtaskATask[j]
				continue
			argv = if SaloosTaskArgs[i] then SaloosTaskArgs[i] else false
			ret = SaloosEtaskATask[j].fn.call(_,argv, SaloosEtaskATask[j].args...)
			SaloosTaskArgs[ret.name] = ret.args

_saloosTasks = new saloosTasks
process.on 'exit', () ->
	if SaloosTaskExit
		return null
	_saloosTasks.run(process.argv[2])

module.exports = _saloosTasks