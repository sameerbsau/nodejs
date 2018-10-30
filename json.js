// var obj = {
//     name: "sameer"
// };
// console.log(obj);
// var strnigObj = JSON.stringify(obj);
// console.log(typeof(strnigObj));
// console.log(strnigObj);

// var personString = '{"name":"sameer","age":24}';
// var person = JSON.parse(personString);
// console.log(personString);
// console.log(person);


const fs = require('fs');

var originalNote = {
    title: 'some title',
    body: 'some body'
};
var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json',originalNoteString);

var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString);
console.log(typeof note);
console.log(note.title);
