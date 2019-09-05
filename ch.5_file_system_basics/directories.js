const fs = require('fs')

/**
 * Rename directory
 */
// fs.renameSync('./storage-files', './storage')

/**
 * Removing all files within the directory
 */
fs.readdirSync('./storage').forEach(fileName => {
  fs.unlinkSync(`./storage/${fileName}`)
})

/**
 * Removing the directory
 */
fs.rmdir('./storage', err => {
  if(err) throw err
  console.log('./storage directory removed');
});
