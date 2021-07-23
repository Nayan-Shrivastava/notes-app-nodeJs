const fs = require('fs');
const chalk = require('chalk')
const getNotes = () => {
    return "Your Notes";
}

const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNote = notes.find((x) => x.title === title);
    if (!duplicateNote) {
        notes.push({ title, body });
        saveNotes(notes);
        console.log("new note added");
    } else {
        console.log("Note title taken!");
    }

}

const removeNote = (title) => {
    const notes = loadNotes();
    const updatedNotes = notes.filter((x) => x.title !== title);
    saveNotes(updatedNotes);
    if (updatedNotes.length === notes.length) {
        console.log(chalk.bgRed.bold("No Note Found1"));
    } else {
        console.log(chalk.bgGreen.bold("Note Removed!"))
    }
}

const listNotes = () => {
    const notes = loadNotes();
    if(notes.length > 0){
        console.log(chalk.bgGreen.bold("Your Notes"))
        console.log()
        notes.forEach(note => {
            console.log()
            console.log(chalk.yellow(note.title));
            console.log(chalk.cyan(note.body));            
        });
    }else{
        console.log(chalk.bgRed.bold("No Notes Found!"))
    }
}

const readNotes = (title) => {
    const notes = loadNotes();
    const note  = notes.find((x) => x.title === title);
    if(note){
        console.log(chalk.bgYellow.bold(note.title));
        console.log(note.body);
    }else{
        console.log(chalk.bgRed.bold("No Note Found"));
    }
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (err) {
        return [];
    }
}

const saveNotes = (notes) => {
    fs.writeFileSync('notes.json', JSON.stringify(notes));
}


module.exports = {
    getNotes,
    addNote,
    removeNote,
    listNotes,
    readNotes
}