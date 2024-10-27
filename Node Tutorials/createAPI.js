const http = require('http');
const data = require('./dataExportToAPI');
http.createServer((req,res)=>{
    res.writeHead(200, 'Content-Type', 'application/json');
    res.write(JSON.stringify(data));
    res.end();

}).listen(4500);