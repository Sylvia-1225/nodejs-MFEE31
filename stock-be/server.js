const { request, response } = require('express');
const express = require('express');
// 利用 express 這個框架建立一個web app
const app = express();

// app.[Method]
// get, post, put, patch, delete, option, head
app.get('/', (req, res) => {
    res.send('Hello Express66');
});

app.listen(3001, () => {
    console.log('Server running at port 3001');
});