class saloosTasks
	@exit	= false
	@aTask	= new Array()
	@aTaski	= new Object()
	_		= @
	# constructor: (options) ->
	task : (_name, _fn) ->
		_.aTaski[_name] = _.aTask.length
		_.aTask.push {name : _name, fn : _fn}

	run  : (_from) ->
		_.exit = true
		if !_from
			start = 0
		else
			start = _.aTaski[_from]

		for i in [start .. (_.aTask.length-1)]
			_.aTask[i].fn()

_saloosTasks = new saloosTasks
process.on 'exit', () ->
	if _saloosTasks.exit
		return null
	_saloosTasks.run(process.argv[2])

module.exports = _saloosTasks