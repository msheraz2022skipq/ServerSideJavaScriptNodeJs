const event = require('events')
const fs = require('fs')

const eventEmitter = new event.EventEmitter()
eventEmitter.addListener('updateResult',()=>{
    console.log("updateResult events invoked");
})

fs.readFile('test.txt', 'utf-8', (err,data)=>{
    eventEmitter.emit('updateResult')
})