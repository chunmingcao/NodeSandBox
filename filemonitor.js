var stat = require('fs').stat;

stat('history.md', function(err, s){
    if(err)
        console.log(err);
    console.log(s);
});