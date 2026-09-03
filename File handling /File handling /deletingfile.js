const fs = require('fs');

fs.unlink('oldfile.txt', (err) => {
    if (err) {
        console.log('File not found or already deleted');
        return;
    }
    console.log('File deleted!');
});