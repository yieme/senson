// Test: examples/command-and-object.js
// Command and Object
'use strict';

var should = require('should')
var exec   = require('child_process').exec

describe('example', function() {
  it('Command and Object', function(done) {
  exec('node examples/command-and-object.js', function (error, stdout, stderr) {
    if (error) throw error
      stdout.slice(0,-1).should.equal("{ job: 'count', cmd: 'run' }")
      stderr.should.equal('')
      done()
    })
  })
})
