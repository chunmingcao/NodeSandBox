var http = require('http');

server = http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    
    res.write('Hello\r\n');
    
    setTimeout(function(){
        res.end('World\r\n');
    }, 2000);
});

server.listen(8000);