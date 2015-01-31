"use strict";

var jsonic = require('jsonic')
var role = undefined

// input: jsonic_string
// or     command,jsonic_string
// or     role#command,jsonic_string
// output: JSONIC parsed object
function senson(param) {
  if (typeof param === 'string') {
    var part = param.split(',')
    var command = part[0]
    if (command && command.indexOf(':') < 0) {
      var roleCommand = command.split('#')
      if (roleCommand[1]) {
        part[0]='role:' + roleCommand[0] + ',cmd:' + roleCommand[1]
      } else {
        part[0]='cmd:' + roleCommand[0]
      }
      param = part.join(',')
    }
  }
  return jsonic(param)
}


// change the default role
function role(newRole) {
  role = newRole
}

module.exports = senson
//module.export.role = role
