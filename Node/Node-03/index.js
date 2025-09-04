const http = require('http')

const server = http.createServer((req, res) => {
  // console.log(req.headers);
  const log = `${new Date().toISOString()} - ${req.method} ${req.url}`;
  console.log(log);

  switch (req.url) {
    case '/':
      res.end('Hello World\n');
      break;
    case '/json':
      res.end(JSON.stringify({ message: 'Hello World' }));
      break;
    default:
      res.end('Not Found\n');
  }
})

server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});