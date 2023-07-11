
const http = require('http');


const server = http.createServer((req, res) => {
  
  res.setHeader('Content-Type', 'text/plain');
    console.log("Req\n" ,req)
    console.log(__dirname)
  
  if (req.method === 'GET'){
    
    res.statusCode = 200;
    res.end('Hello, World!');
  } else {
    
    res.statusCode = 404;
    res.end('Not Found');
  }
});


const port = 3000;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
