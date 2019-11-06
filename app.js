//Menggunakan Path  Module
const path = require('path');
//Menggunakan Express Module
const express = require('express');
//Menggunakan HBS view enggine
const hbs = require('hbs');
const app = express();

//set dynamic views file
app.set('views', path.join(__dirname, 'views'));
//set view enggine
app.set('view engine', 'hbs');
//set public folder as static foler for static file
app.use(express.static('public'));
//route untuk halaman home
app.get('/', (req, res) => {
    // Render file index.hbs
    res.render('index');
})
//route untuk halaman about
app.get('/about', (req, res) => {
    res.send('This is about page');
})

app.listen(8000, () => {
    console.log('Server is running at port 8000');
});