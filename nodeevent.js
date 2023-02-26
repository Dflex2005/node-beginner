const { loadDevServerConfigProvider } = require('@craco/craco/lib/cra');
const events = require('events')

// create class
class MyEmitter extends events {}

// init object
const myEmitter = new MyEmitter();

//event listener
myEmitter.on('event', ()=>console.log('event fired'));

//Init event
myEmitter.emit('event')