const fs = require("fs")
const PORT = process.env.PORT || 8080;
const express = require("express");
const app = express();
const path = require("path");
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Load index.html page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "public" + req.url + ".html"));
});

// Load notes.html page
app.get("/notes", function(req, res) {
  res.sendFile(path.join(__dirname, "public" + req.url + ".html"));
});

// API call that gets saved notes
app.get("/api/notes", function(req, res) {
  let getSavedNotes = JSON.parse(fs.readFileSync(__dirname + "/db/db.json"));
  res.json(getSavedNotes);
});

// API call that posts new note
app.post("/api/notes", function(req, res) {
  let NewNote = req.body;
  let getSavedNotes = JSON.parse(fs.readFileSync(__dirname + "/db/db.json"));
  getSavedNotes.push(NewNote);
  getSavedNotes.forEach((note, i) => {note.id = i + 1});
  fs.writeFileSync(__dirname + "/db/db.json", JSON.stringify(getSavedNotes));
  res.json(getSavedNotes);
})

// API Call that deletes a saved note
app.delete("/api/notes/:id", function(req, res) {
  let getSavedNotes = JSON.parse(fs.readFileSync(__dirname + "/db/db.json"));
  var DeleteNote = getSavedNotes.findIndex(note => note.id == req.params.id)
  getSavedNotes.splice(DeleteNote, 1);
  fs.writeFileSync(__dirname + "/db/db.json", JSON.stringify(getSavedNotes));
  res.json(getSavedNotes);
})

// Start server listener
app.listen(PORT, function() {
  console.log("Server is listening on http://localhost:" + PORT);
});