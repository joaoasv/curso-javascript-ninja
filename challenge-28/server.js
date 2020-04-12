const http = require('http');
const express = require('express');
const path = require('path');
const ejs = require('ejs');

const app = express();

console.log(app);

app.engine('html', require('ejs').renderFile);
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
    res.render(__dirname + '/index.html');
});

app.listen(7777, () => {
    console.log('server is ruinning...');
});
