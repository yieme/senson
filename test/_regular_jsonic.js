// test/main.js
var should = require('should')
var exec = require('child_process').exec

describe('package', function() {
  it('Regular Jsonic', function(done) {
		exec("node examples/regular_jsonic.js", function (error, stdout, stderr) {
			if (error) throw error
			stdout.should.equal("{ cmd: 'run', job: 'count' }\n")
			stderr.should.equal("")
			done()
		})
  })
})
