# senson

[SenecaJS](https://github.com/rjrodger/senecajs) simplified [jsonic](https://github.com/rjrodger/jsonic)

## Install

```js
npm install senson --save
```

## Examples

### Simple Command

```js
var senson = require('../index')

var test   = senson('run,job:count')

console.log(test) // { cmd: 'run', job: 'count' }
```

### Role Command

```js
var senson = require('../index')

var test   = senson('tasks#run,job:count')

console.log(test) // { role: 'tasks', cmd: 'run', job: 'count' }
```

### Regular [jsonic](https://github.com/rjrodger/jsonic) passthru

```js
var senson = require('../index')

var test   = senson('cmd:run,job:count')

console.log(test) // { cmd: 'run', job: 'count' }
```

## License: MIT
