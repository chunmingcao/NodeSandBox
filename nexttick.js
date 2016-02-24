var http = require('http');

function compute() {
    // performs complicated calculations continuously
    // ...
    for(var i = i; i < 10000000; i ++){
        var p = (i * 8777 /9999 + 999)/99;
    }
    console.log('-----------');
    //process.nextTick(compute);
    setImmediate(compute);
}

http.createServer(function(req, res) {
     console.log('-----------');
     res.writeHead(200, {'Content-Type': 'text/plain'});
     res.end('Hello World');
}).listen(8000);

compute();