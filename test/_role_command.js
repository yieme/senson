// test/main.js
var should = require('should')
var exec = require('child_process').exec

describe('example', function() {
  it('Role Command', function(done) {
		exec("node examples/role_command.js", function (error, stdout, stderr) {
			if (error) throw error
			stdout.should.equal("{ role: 'tasks', cmd: 'run', job: 'count' }\n")
			stderr.should.equal("")
			done()
		})
  })
})
