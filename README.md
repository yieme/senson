# senson

[SenecaJS](https://github.com/rjrodger/senecajs) simplified [jsonic](https://github.com/rjrodger/jsonic)

## Install

```js
npm install senson --save
```
<!-- EXAMPLES:BEGIN -->
## Examples

### Command and object

```js
var senson = require('../index')

var test   = senson('run', {job:'count'})

console.log(test) // { job: 'count', cmd: 'run' }
```

### Regular jsonic

```js
var senson = require('../index')

var test   = senson('cmd:run,job:count')

console.log(test) // { cmd: 'run', job: 'count' }
```

### Role command

```js
var senson = require('../index')

var test   = senson('tasks.run,job:count')

console.log(test) // { role: 'tasks', cmd: 'run', job: 'count' }
```

### Simple command

```js
var senson = require('../index')

var test   = senson('run,job:count')

console.log(test) // { cmd: 'run', job: 'count' }
```
<!-- EXAMPLES:END -->
## License: MIT
