const http = require('http');
const express = require('express');
const app = express();
const server = http.createServer(app);
const PORT = 3000;

app.get('/:stuff',(req, res) => {
    res.send(req.params.stuff);
});

server.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})