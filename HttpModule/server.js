const http = require("http");

// Creating a http server:
const server = http.createServer((req, res) => {
  console.log(req, "req");
  res.writeHead(200, { "Content-Type": "textplain" });
  res.end("Hello Server");
});

server.listen(3000, () => {
  console.log("Server is now listening to port 3000");
});
