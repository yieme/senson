// test/main.js
var should = require('should')
var exec = require('child_process').exec

describe('example', function() {
  it('Simple Command', function(done) {
		exec("node examples/simple_command.js", function (error, stdout, stderr) {
			if (error) throw error
			stdout.should.equal("{ cmd: 'run', job: 'count' }\n")
			stderr.should.equal("")
			done()
		})
  })
})
