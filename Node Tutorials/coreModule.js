const colors = require('colors');
console.log('Bishal Koirala'.blue);  // Global core module

const fs = require('fs'); // all features of fs module is imported
fs.writeFileSync('text.txt', 'hello world'); // Non Global core module


const gs = require('fs').writeFileSync; // only require features of fs module is imported
gs('hello.txt', 'Bishal Koirala'); 



console.log(__dirname);
console.log(__filename);