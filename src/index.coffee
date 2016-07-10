SaloosTaskExit		= false
SaloosTaskATask		= new Array()
SaloosTaskATaski	= new Object()
SaloosEtaskATask	= new Array()
SaloosEtaskATaski	= new Object()
class saloosTasks
	_		= @
	# constructor: (options) ->
	task : (_name, _fn) ->
		SaloosTaskATaski[_name] = SaloosTaskATask.length
		SaloosTaskATask.push {name : _name, fn : _fn}

	endtask : (_name, _fn) ->
		SaloosEtaskATaski[_name] = SaloosEtaskATask.length
		SaloosEtaskATask.push {name : _name, fn : _fn}

	run  : (_from) ->
		SaloosTaskExit = true
		if !_from
			start = 0
		else
			start = SaloosTaskATaski[_from]

		for i in [start .. (SaloosTaskATask.length-1)]
			SaloosTaskATask[i].fn()

		for j in [0 .. (SaloosEtaskATask.length-1)]
			SaloosEtaskATask[j].fn()

_saloosTasks = new saloosTasks
process.on 'exit', () ->
	if SaloosTaskExit
		return null
	_saloosTasks.run(process.argv[2])

module.exports = _saloosTasks