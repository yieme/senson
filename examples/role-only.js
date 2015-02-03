var senson = require('../index')

var test   = senson('tasks.,job:count')

console.log(test) // { role: 'tasks', job: 'count' }
