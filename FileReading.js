var fs = require('fs');
var zlib = require('zlib');

var readable = fs.createReadStream('Mongoose/node_modules/mongoose/History.md',
                                  {encoding: 'utf-8', highWaterMark: 32*1024});

var writable = fs.createWriteStream(__dirname + '/history.md');

var compressed = fs.createWriteStream(__dirname + '/history2.md');

var gzip = zlib.createGzip();


readable.on('data', function(chunk){
    writable.write(chunk);
    console.log(chunk.length);
});

readable.on('end', function(){
    console.log('read end');
});

readable.pipe(gzip).pipe(compressed);