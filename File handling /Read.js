const fs = require('fs');

// Async (Recommended for servers)
fs.readFile('hello.txt', 'utf-8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log('File content:', data);
});