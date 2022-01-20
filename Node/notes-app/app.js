//const validator = require('validator')

const yargs = require('yargs')

yargs.version('1.0.0')

//add,remove notes

yargs.command(
    {
        command:'add',
        describe:'Add Notes',
        handler : function()
        {
            console.log('Adding new note')
        }
    }
)

yargs.command(
    {
        command:'remove',
        describe:'Remove Notes',
        builder:{
            title:{
                describe: 'Note title'
            }
        },
        handler : function()
        {
            console.log('Remove a note')
        }
    }
)
yargs.command(
    {
        command:'list',
        describe:'List all Notes',
        handler : function()
        {
            console.log('List all notes')
        }
    }
)
yargs.command(
    {
        command:'read',
        describe:'read the Note',
        handler : function()
        {
            console.log('Read the note')
        }
    }
)
console.log(process.argv)
console.log(yargs.argv)