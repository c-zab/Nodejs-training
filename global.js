const path = require('path')

console.log(__dirname);
console.log(__filename);

console.log('-----------');

console.log(`The file name is ${path.basename(__filename)}`);
console.log(`The dir name is ${path.basename(__dirname)}`);

console.log('-----------');
