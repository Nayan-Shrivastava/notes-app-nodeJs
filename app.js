const notes = require('./notes.js')
const chalk = require('chalk');
const yargs = require('yargs');
const { string } = require('yargs');

const argv = yargs.argv;
// Add a note handler
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: "Note body",
            demandOption: true,
            type: 'string'
        }
    },
    handler: () => {
        notes.addNote(argv.title, argv.body);
    }
});

// Remove a note handler
yargs.command({
    command: 'remove',
    describe: "remove a note",
    builder: {
        title: {
            describe: "Title of the Note to be Removed",
            demandOptions: true,
            type: "string"
        }
    },
    handler: () => {
        notes.removeNote(argv.title);
    }
})

yargs.command({
    command: 'list',
    describe: "list all note",
    handler: () => {
        notes.listNotes();
    }
})

yargs.command({
    command: 'read',
    describe: "read a note",
    builder: {
        title: {
            describe: "Title of the Note to be Read",
            demandOptions: true,
            type: "string"
        }
    },
    handler: () => {
        notes.readNotes(argv.title);
    }
})
//console.log(yargs.argv)
yargs.parse()