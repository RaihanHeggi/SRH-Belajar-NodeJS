const fs = require('fs');

const fileReadCallback = (error, data) => {
    if(error) {
        console.log('Gagal membaca berkas');
        return;
    }
    console.log(data);
};
 
const data = fs.readFile('notes.txt', 'UTF-8', fileReadCallback);

console.log(data);