var senson = require('../index')

var test   = senson('run,job:count')

console.log(test) // { cmd: 'run', job: 'count' }
