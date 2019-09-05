const fs = require('fs')

/**
 * Read a file using Stream
 */
const readStream = fs.createReadStream('./assets/lorum-ipsum.md', 'UTF-8')

let fileText = ''

readStream.on('data', data => {
  console.log(`I read ${data.length - 1} characters of text`)
  fileText += data
})

readStream.once('data', data => {
  console.log(data);
})

readStream.on('end', () => {
  console.log('Finished reading file')
  console.log(`In total I read ${fileText.length - 1} characters of text`)
})
