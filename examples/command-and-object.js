// examples/command-and-object.js
//
'use strict';

var senson = require('../index')

var test   = senson('run', {job:'count'})

console.log(test) // { job: 'count', cmd: 'run' }
