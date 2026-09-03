const fs = require('fs');

fs.appendFile('hello.txt', '\nNew log entry at ' + new Date(), (err) => {
    if (err) throw err;
    console.log('Log appended!');
});