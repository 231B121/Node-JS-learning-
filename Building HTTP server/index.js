const http = require('http');  
const myServer = http.createServer((req, res) => {
    console.log('Request received');    
    console.log(req)
    res.end('hello  bro `!');    
});

myServer.listen(8000, () => {
    console.log('Server is running in port 8000');
});