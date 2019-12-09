const chalk = require('chalk')
const yargs = require('yargs')
const validator = require('validator')
const getNotes = require('./notes.js')

// Customize yargs version
yargs.version('1.1.0')

//Create add command
yargs.command({
    command: 'add',
    descride: 'Add a new note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note Body',
            demandOption: true,
            type: 'string',
        }
    },
    handler: function (argv) {
        console.log('Title: ' + argv.title)
        console.log('Body: ' + argv.body)
    }
})

//Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function () {
        console.log('Removing a note!')
    }
})

//Create read command 
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
        }
    },
    handler: function (argv) {
        console.log('Reading a note!', argv)
    }
})

//Create list command
yargs.command({
    command: 'list',
    describe: 'List a note',
    handler: function () {
        console.log('Listing out notes!')
    }
})


yargs.parse()


