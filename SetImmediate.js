console.log('hello!!!');

setTimeout(function(){
  console.log('I am here timeout');
}, 0);

setImmediate(function(){
  console.log('I am here setImmediate');
});

process.nextTick(function(){
  console.log('I am here nextTick');
});

console.log('hello end');