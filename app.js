const fs = require("fs")
const PORT = process.env.PORT || 8080;
const express = require("express");
const app = express();
const path = require("path");
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "public" + req.url + ".html"));
});

app.get("/notes", function(req, res) {
  res.sendFile(path.join(__dirname, "public" + req.url + ".html"));
});

app.get("/api/notes", function(req, res) {
  let getSavedNotes = JSON.parse(fs.readFileSync(__dirname + "/db/db.json"));
  res.json(getSavedNotes);
});

app.post("/api/notes", function(req, res) {
  var NewNote = req.body;
  let getSavedNotes = JSON.parse(fs.readFileSync(__dirname + "/db/db.json"));
  getSavedNotes.push(NewNote);
  fs.writeFileSync(__dirname + "/db/db.json", JSON.stringify(getSavedNotes));
  res.json(getSavedNotes);
})

app.delete("/api/notes/:id", function(req, res) {
  let DeleteNote = req.body;
  let getSavedNotes = JSON.parse(fs.readFileSync(__dirname + "/db/db.json"));
  var id = getSavedNotes.indexOf(DeleteNote);
  getSavedNotes.splice(id, 1);
  fs.writeFileSync(__dirname + "/db/db.json", JSON.stringify(getSavedNotes));
  res.json(getSavedNotes);
})

app.listen(PORT, function() {
  console.log("Server is listening on http://localhost:" + PORT);
});