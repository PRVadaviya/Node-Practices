const http = require("http");
const fs = require("fs");

http.createServer((req, res) => {
  if (req.url === "/") {
          
    const html = fs.readFileSync("index.html");
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(html);
  }
}).listen(2025);