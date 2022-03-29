const fs = require('fs');
const http = require('http');
var querystring = require('querystring')
const server = http.createServer((req,res)=>{
    if(req.url === '/home'){
        fs.readFile('form.html', (err,data)=>{
            if(err){
                res.writeHead(404);
                res.write('Contents you are looking are Not Found');
            }else{
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(data);
            }
            res.end();
        })
    }else if(req.url === '/homeSubmit' && req.method === 'POST'){
        var data = '';
        req.on('data',function(chunk){
            data += chunk;
        });
        req.on('end',function(chunk){
            var q = querystring.parse(data);
            console.log(q)
        })
        res.end();
    }
})
server.listen(3000,'localhost',()=>{
    console.log('listen 3000')
})