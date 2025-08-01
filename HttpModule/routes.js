// Routing example using http module:
const http = require("http");
const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/") {
    res.writeHead(200, { "content-type": "text/plain" });
    res.end("Homepage");
  } else if (url == "/project") {
    res.writeHead(200, { "content-type": "text/plain" });
    res.end("Projectpage");
  } else {
    res.writeHead(200, { "content-type": "text/plain" });
    res.end("404 NOT FOUND");
  }
});
server.listen(3000, () => {
  console.log("Server listening on port 3000");
});
