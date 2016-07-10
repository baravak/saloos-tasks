saloosTask = require '../../bin/index.js'
v = 10
saloosTask.task "second", () ->
	global.myTest.Hi = arguments[0][0]