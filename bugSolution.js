const http = require('http');

const server = http.createServer((req, res) => {
  // Handle requests here
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!');
});

// Start the server on port 3000
server.listen(3000, () => {
  console.log('Server listening on port 3000');
});

//Handled exception
setTimeout(() => {
    try{
        console.log(unexist);
    }catch(e){
        console.error('Error:',e);
    }
},1000);