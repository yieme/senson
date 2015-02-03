"use strict";

var jsonic = require('jsonic')

// input: jsonic_string
// or     command,jsonic_string
// or     role#command,jsonic_string
// output: JSONIC parsed object
function senson(param, obj) {
  var isObj = typeof obj === 'object'
  if (typeof param === 'string') {
    var part = param.split(',')
    var command = part[0]
    if (command && command.indexOf(':') < 0) {
      var roleCommand = command.split('.')
      if (typeof roleCommand[1] == 'string' && roleCommand[1].length > 0) {
        if (isObj) {
          obj.role = roleCommand[0]
          if (roleCommand[1].length > 0) {
            obj.cmd  = roleCommand[1]
          }
        } else {
          part[0]='role:' + roleCommand[0] + ',cmd:' + roleCommand[1]
        }
      } else {
        var context = (typeof roleCommand[1] == 'string') ? 'role' : 'cmd'
        if (isObj) {
          obj[context] = roleCommand[0]
        } else {
          part[0]=context + ':' + roleCommand[0]
        }
      }
      if (!isObj) {
        param = part.join(',')
      }
    }
  }
  if (!isObj) obj = jsonic(param)
  return obj
}


// change the default role
function role(newRole) {
  role = newRole
}

module.exports = senson
//module.export.role = role
