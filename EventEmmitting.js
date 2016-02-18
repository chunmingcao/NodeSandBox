var events = require("events");
var eventsEmitter = new events.EventEmitter();
var count = 0;
eventsEmitter.on("mobileon",function(data){
    console.log(count++);
    console.log(data);
});

eventsEmitter.on("mobileon",function(data){
    console.log('second listener');
});
console.log('emitting event');
eventsEmitter.emit("mobileon",'hello');
console.log('emitting event again');
eventsEmitter.emit("mobileon",'hello again');


