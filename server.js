const express = require('express');
const app = express();

app.get('/hello', (req, res) =>
    res.send('Hello World!'));

const PORT = 4000;
app.listen(PORT);

require('./movies/service')(app);

app.listen(4000);
