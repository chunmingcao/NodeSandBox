exec = require('child_process').exec;

exec('ls /', function(err, output){
    console.log(output)
});

