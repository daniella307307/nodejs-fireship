// console.log("Hello world!")

// // creating a new event

// const {EventEmitter} = require('events')
// const eventEmitter = new EventEmitter()
// eventEmitter.on('Lunch', () => {
//     console.log('Ohh time for suppert!')
// })
// eventEmitter.emit('Lunch');
// eventEmitter.emit('Lunch');

// // The file system in nodejs

// const {readFileSync} = require('fs');

// // const txt = readFileSync('./hello.txt', 'utf-8');
// // const text = readFile('./hello.txt', 'utf-8', (err, data) => {
// //     if (err) {
// //         console.log(err);
// //     } else {
// //         console.log(data);
// //     }
// //});make it non-blocking
// // console.log(txt);

// const {readFile} = require('fs').promises;
// const readFileAsync = async () => {
//     try {
//         const data = await readFile('./hello.txt', 'utf-8');
//         console.log(data);
//     } catch (err) {
//         console.log(err);
//     }
// }
// console.log(readFileAsync);
// console.log("do this after reading the file");


const express = require('express');
const app = express();
const port = 3000;
app.get('/', (req, res) => {
    res.send('Hello World!')
}
);


app.listen(port, (req, res) => {
    console.log(`Example app listening at http://localhost:${port}`)
});