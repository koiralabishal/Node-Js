const http = require('http');

// http.createServer((req,res)=>{
//     res.write('<h1>Hi, I am Bishal Koirala </h1>');
//     res.end();
// }).listen(4500);


const data = (req,res)=>{
    res.write('<h1>Hi, I am Bishal Koirala. I am studying Software Engineering in GCES,Pokhara,Nepal.</h1>');
    res.end();
}

http.createServer(data).listen(4500);