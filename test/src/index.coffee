saloosTask = require '../../bin/index.js'
global.myTest = new Object()
saloosTask.task "hello", () ->
	global.myTest.Hello = true
	{name: "second", args: [true]}

saloosTask.task "my", (r, a1) ->
	global.myTest.My = a1
,true
saloosTask.task "iran", (r, a1, a2) ->
	global.myTest.Iran = a2
,false, true

require './secondTest.js'

saloosTask.run();


runtest = 0;
for i of global.myTest
	if global.myTest[i] == true
		runtest++
	else
		console.log "bug in #{i}"

if runtest == 4
	console.log "4 test passed"
else
	console.log "bug!!!!!!!"
