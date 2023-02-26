const EventEmmiter = require('events')
const uuid = require('uuid');

class Logger extends EventEmmiter{
    log(msg){
        this.emit('message', {id: uuid.v4(), msg})
    }
}

//module.exports = Logger;
const logger = new Logger();

logger.on('message', (data) => console.log('called', data));

logger.log("hello world")



