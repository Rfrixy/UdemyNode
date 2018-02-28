const fs = require('fs');

var fetchNotes = () => {
  try{
    var noteString = fs.readFileSync('notes-data.json');
    return JSON.parse(noteString);
  } catch(e){
    return [];
  }
}

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}

var addNote = (title, body) =>{
  var notes = fetchNotes();
  var note = {
    title,
    body
  };
  var duplicateNotes = notes.filter((note) => note.title === title);
  if(duplicateNotes.length === 0){
    notes.push(note);
    saveNotes(notes);
    return note;
  }

}

var getAll = () =>{
  return(fetchNotes());
}

var getNote = (title) =>{
  var notes = fetchNotes();
  var foundNote = notes.filter((note,pos)=> note.title === title);
  return foundNote[0];
}

var logNote = (note) =>{
  debugger;
  console.log(' --- ');
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
}
var removeNote = (title) =>{
  var notes = fetchNotes();
  var removedNotes = notes.filter((note)=> note.title!= title)
  saveNotes(removedNotes);

  return notes.length !== removedNotes.length;
}

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote,
  logNote
};
