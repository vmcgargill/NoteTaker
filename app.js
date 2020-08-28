const PORT = process.env.PORT || 8080;
const express = require("express");
const app = express();
const path = require("path")
app.use(express.static('public'));

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

app.get("/notes", function(req, res) {
  res.sendFile(path.join(__dirname, "public/notes.html"));
});

app.listen(PORT, function() {
  console.log("Server is listening on http://localhost:" + PORT);
});

