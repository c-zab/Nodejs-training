const fs = require('fs')

fs.readdir('./assets', (err, files) => {
  if(err){
    throw err
  }
  console.log("Complete")
  console.log("TCL: files", files)
})

console.log('started reading files');
