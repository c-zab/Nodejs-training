const fs = require('fs')

fs.readFile('./assets/Readme.md', 'UTF-8', (err, text) => {
  if(err) console.log("An error has occured ", err)
  console.log('file contents read');
  console.log("TCL: text", text)
})

fs.readFile('./assets/alesx.jpg', (err, img) => {
  if(err) {
    console.log("TCL: err", err.message)
    process.exit()
  }
  console.log('Image read');
  console.log("TCL: image", img)
})
