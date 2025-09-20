const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 8000;

// TODO: need to work on, send the html and the corresponding js file.
const server = http.createServer((req, res) => {
  let filepath = "";
  if (req.url === "/") {
    filepath = path.join(__dirname, "index.html");
    fs.readFile(filepath, (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Internal Server Error");
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      }
    });
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Page Not Found");
  }

  let contentType = "text/html";
  if (filepath.endsWith(".js")) contentType = "application/javascript";

  fs.readFile(filepath, (err, data) => {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Internal Server Error");
    } else {
      res.writeHead(200, { "Content-Type": contentType });
      res.end(data);
    }
  });
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
