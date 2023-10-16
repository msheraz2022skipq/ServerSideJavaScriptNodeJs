const fs = require('fs')

const loadNotes = () => {
    const buffer = fs.readFileSync('notes.json');
    const data = buffer.toString();
    const obj = JSON.parse(data)
    return obj
}

const addNotes = (firstname, lastname) => {
    const notes = loadNotes()
    const duplicateNotes = notes.filter((note) => note.lastname === lastname)
    if (duplicateNotes.length === 0) {
        notes.push({
            firstname: firstname, lastname: lastname
        })
    }
    else {
        console.log('Last name already taken')
    }
    saveNotes(notes)
}

const saveNotes = (notes) => {
    const dataStr = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataStr)
}


const getAllNotes = () => {
    const notes = loadNotes();
    notes.forEach(element => {
        console.log(element.lastname)
    });
}


const readNote = (lastname) => {
    const notes = loadNotes();
    var note = notes.find(note => note.lastname === lastname)
    if (note) {
        console.log('firstname: ' + note.firstname + ' lastname: ' + lastname);
    }
    else {
        console.log('Note not found');
    }
}

const removeNote = (lastname) => {
    const notes = loadNotes();
    const findNoteIndex = notes.findIndex(note => note.lastname === lastname)
    if (findNoteIndex !== -1) {
        notes.splice(findNoteIndex, 1)
    }
    else {
        console.log('Note not found')
    }
    saveNotes(notes)
}

module.exports = { addNotes, getAllNotes, removeNote, readNote }