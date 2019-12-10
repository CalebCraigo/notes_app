const chalk = require('chalk')
const fs = require('fs')


const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added'))
    } else {
        console.log(chalk.red.inverse('Note title taken'))
    }

}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title !== title
    )
    
    if (notesToKeep.length === notes.length) {
        console.log(chalk.red.inverse('Note Not Found'))
    } else {
        console.log(chalk.green.inverse('Note Removed'))
        saveNotes(notesToKeep)
    }
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch(e) {
        return []
    }
}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.blue.bold.inverse('Your notes'))
    notes.forEach((note) => {
        console.log(note.title)
    })
}

const readNotes = (title) => {
    const notes = loadNotes()
    const matchNote = notes.find((note) => note.title === title)

    if (matchNote) {
        console.log(chalk.blue.inverse('Title: ', matchNote.title))
        console.log('Body: ', matchNote.body)
    } else {
        console.log(chalk.red.inverse('Note Note Found'))
    }
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNotes: readNotes,
}