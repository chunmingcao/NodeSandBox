var spawn = require('child_process').spawn;

var cat = spawn('cat');
cat.stdin.write('hello\n');

setTimeout(function(){
    cat.stdin.end('world\n');
}, 2000);
/*
cat.stdout.on('data', function(d){
    console.log(d.toString());
})
*/

cat.stdout.pipe(process.stdout);