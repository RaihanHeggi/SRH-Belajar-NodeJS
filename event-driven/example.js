const { EventEmitter } = require('events');
 
const myEventEmitter = new EventEmitter();
 
// fungsi yang akan dijalankan ketika event coffee-order terjadi
const makeCoffee = ({ name }) => {
    console.log(`Kopi ${name} telah dibuat!`);
};

const makeBill = ({ price }) => {
    console.log(`Bill sebesar ${price} telah dibuat!`);
}

// const onCoffeeOrderedListener = ({ name, price }) => {
//     makeCoffee(name);
//     makeBill(price);
// }
 
// mendaftarkan fungsi makeCoffee sebagai listener event coffee-order
// untuk mendaftarkan sebuah event dapat menggunakan On
myEventEmitter.on('coffee-order', makeCoffee);
myEventEmitter.on('coffee-order', makeBill);

// myEventEmitter.on('coffee-order', onCoffeeOrderedListener);

// Memicu event 'coffee-order' terjadi. 
// Emit() berfungsi untuk menerima masukan untuk sebuah event yang masuk
myEventEmitter.emit('coffee-order', { name: 'Tubruk', price: 15000 });
