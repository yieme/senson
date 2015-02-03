"use strict";

var jsonic = require('jsonic')
var role = undefined

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
      if (roleCommand[1]) {
        if (isObj) {
          obj.role = roleCommand[0]
          obj.cmd  = roleCommand[1]
        } else {
          part[0]='role:' + roleCommand[0] + ',cmd:' + roleCommand[1]
        }
      } else {
        if (isObj) {
          obj.cmd = roleCommand[0]
        } else {
          part[0]='cmd:' + roleCommand[0]
        }
      }
      if (isObj) {
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
