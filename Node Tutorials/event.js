const express = require('express');
const EventEmitter = require('events');

const app = express();
const event = new EventEmitter();


let count = 0;
event.on('CountEvent', () => {
    count++;
    console.log("Event Called ", count);
})


app.get('/', (req, res) => {
    res.send("Api Called");
    event.emit('CountEvent');
});


app.listen(5000);