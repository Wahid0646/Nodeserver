const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  const yourName = 'Abdul Wahid';
  console.log('Received a request from the browser. Name:', yourName);
  res.end(yourName);
});

const port = 4000;
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
