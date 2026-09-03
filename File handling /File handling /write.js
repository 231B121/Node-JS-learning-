const fs = require('fs');

const content = 'Hello, this is my first file!';

// writeFile overwrites existing content
fs.writeFile('logs.txt', content, (err) => {
    if (err) {
        console.error('Error writing file:', err);
        return;
    }
    console.log('File written successfully!');
});
