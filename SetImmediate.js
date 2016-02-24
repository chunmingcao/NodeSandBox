var events = require('events');
var eventsEmitter = new events.EventEmitter();

eventsEmitter.on('hello', function(){
    console.log('Say hello!!! from emitter');
});

console.log('hello!!!');

setTimeout(function(){
  console.log('I am here timeout');
}, 0);



setImmediate(function(){
  console.log('I am here setImmediate');
});
setImmediate(function(){
  console.log('I am here setImmediate22222');
});

process.nextTick(function(){
  console.log('I am here nextTick');
    
});
process.nextTick(function(){
    process.nextTick(function(){
        console.log('I am here next nextTick 2222!!');
    });
    eventsEmitter.emit('hello');
    process.nextTick(function(){
        console.log('I am here next nextTick 2222!!');
    });    
});

console.log('hello end');
eventsEmitter.emit('hello');
console.log('hello end');