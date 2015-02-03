# senson

[SenecaJS](https://github.com/rjrodger/senecajs) simplified [jsonic](https://github.com/rjrodger/jsonic)

## Install

```js
npm install senson --save
```
<!-- EXAMPLES:BEGIN -->
## Examples

### [Command and object](blob/master/examples/command-and-object.js)

```js
var senson = require('senson')

var test   = senson('run', {job:'count'})

console.log(test) // { job: 'count', cmd: 'run' }
```

### [Regular jsonic](blob/master/examples/regular_jsonic.js)

```js
var senson = require('senson')

var test   = senson('cmd:run,job:count')

console.log(test) // { cmd: 'run', job: 'count' }
```

### [Role command](blob/master/examples/role_command.js)

```js
var senson = require('senson')

var test   = senson('tasks.run,job:count')

console.log(test) // { role: 'tasks', cmd: 'run', job: 'count' }
```

### [Simple command](blob/master/examples/simple_command.js)

```js
var senson = require('senson')

var test   = senson('run,job:count')

console.log(test) // { cmd: 'run', job: 'count' }
```
<!-- EXAMPLES:END -->
## License: MIT
