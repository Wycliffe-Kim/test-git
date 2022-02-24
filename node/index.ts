import http from "http";

const server = http.createServer((request, response) => {
  response.writeHead(200);
  response.end("Hello World");
});

server.listen(8000);