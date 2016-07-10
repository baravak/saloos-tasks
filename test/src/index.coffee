saloosTask = require '../../bin/index.js'
global.myTest = new Object()
saloosTask.task "hello", () ->
	global.myTest.Hello = true

saloosTask.task "my", () ->
	global.myTest.My = true

saloosTask.task "iran", () ->
	global.myTest.Iran = true

require './secondTest.js'

saloosTask.run();


runtest = 0;
for i of global.myTest
	if global.myTest[i] == true
		runtest++

if runtest == 4
	console.log "4 test passed"
else
	console.log "bug!!!!!!!"
