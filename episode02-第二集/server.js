const http = require("http");

const server = http.createServer((request, response) => {
  response.end("Hello From NodeJS Server 2");
});

const port = 3000;
const ip = "127.0.0.1";

server.listen(port, ip, () => {
  console.log(`Server is running at http://${ip}:${port}`);
});