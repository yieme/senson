// Test: examples/role-only.js
//         example text
'use strict';

var should = require('should')
var exec   = require('child_process').exec

describe('example', function() {
  it('Role Only', function(done) {
  exec('node examples/role-only.js', function (error, stdout, stderr) {
    if (error) throw error
      stdout.slice(0,-1).should.equal("{ role: 'tasks', job: 'count' }")
      stderr.should.equal('')
      done()
    })
  })
})
