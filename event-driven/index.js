//  Buat atau impor variabel EventEmitter dari core module events.
const {EventEmitter} = require('events');

const birthdayEventListener = (name) => {
    console.log(`Happy birthday ${name}!`);
}

// Buat variabel myEmitter yang merupakan instance dari EventEmitter.
myEmitter = new EventEmitter();

// Tentukan birthdayEventListener sebagai aksi ketika event ‘birthday’ dibangkitkan pada myEmitter.
myEmitter.on('birthday', birthdayEventListener);

//Bangkitkanlah event ‘birthday’ pada myEmitter dengan method emit() dan beri nilai argumen listener dengan nama Anda.
myEmitter.emit('birthday', 'Heggi');
