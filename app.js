const fs = require("fs")
const PORT = process.env.PORT || 8080;
const express = require("express");
const app = express();
const path = require("path");
const { json } = require("express");
app.use(express.static('public'));

app.get("/", function(req, res) {
  console.log(req)
  res.sendFile(path.join(__dirname, "public" + req.url + ".html"));
});

app.get("/notes", function(req, res) {
  res.sendFile(path.join(__dirname, "public" + req.url + ".html"));
});

app.get("/api/notes", function(req, res) {
  let getSavedNotes = JSON.parse(fs.readFileSync(__dirname + "/db/db.json"));
  res.json(getSavedNotes);
});

app.listen(PORT, function() {
  console.log("Server is listening on http://localhost:" + PORT);
});