var senson = require('../index')

var test   = senson('cmd:run,job:count')

console.log(test) // { cmd: 'run', job: 'count' }
