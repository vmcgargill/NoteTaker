var http = require("http");
var fs = require("fs");
var PORT = 8080;
var server = http.createServer(handleRequest);

function handleRequest(req, res) {
  var path = req.url;
  switch (path) {

  case "/":
    return displayRoot(res);

  case "/notes":
    return displayNotes(res);

  default:
    return display404(path, res);
  }
}

function displayRoot(res) {
fs.readFile(__dirname + "/public/index.html", function(err, data) {
    if (err) throw err;
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
});
}
  
function displayNotes(res) {
fs.readFile(__dirname + "/public/notes.html", function(err, data) {
    if (err) throw err;
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
});
}

function display404(url, res) {
    var myHTML = "<html>" +
      "<body><h1>404 Not Found </h1>" +
      "<p>The page you were looking for: " + url + " can not be found</p>" +
      "</body></html>";
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end(myHTML);
}

server.listen(PORT, function() {
  console.log("Server is listening on http://localhost:" + PORT);
});

