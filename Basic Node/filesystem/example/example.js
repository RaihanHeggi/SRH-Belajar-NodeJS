const fs = require('fs');

const fileReadCallback = (error, data) =>{
    if(error){
        console.log('Gagal Membaca Berkas');
        return;
    }
    console.log(data);

}

// Reading Using Asynchronous Methods
const data = fs.readFile('todo.txt', 'UTF-8', fileReadCallback);


// Reading Using Synchronous Methods
// const data = fs.readFileSync('todo.txt', 'UTF-8');


console.log(data);