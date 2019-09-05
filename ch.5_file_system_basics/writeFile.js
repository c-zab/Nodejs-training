const fs = require('fs')

const md = `
# This is a new File

So we can write text here

* fs.readdir
* fs.readFile
* fs.readWrite

`
fs.writeFile('./assets/notes.md', md.trim(), err => {
  if(err) throw err
  console.log('File saved');
})
