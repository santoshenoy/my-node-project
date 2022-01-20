const express = require('express');
const app = express();

app.get('/hello', (req, res) =>
    res.send('Hello World!'));

const PORT = 4000;
app.listen(PORT);
// load the express library
// create an instance of the library

// use express library to listen for URL pattern "/hello"
// respond with string "Hello World!"


// listen to port 4000