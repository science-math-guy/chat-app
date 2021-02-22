const express = require('express');
const socket = require('socket.io');

const app = express();

app.use(express.static('public'));

const PORT = process.env.PORT || 3000;

const server = app.listen(
    PORT,
    ()=>{
        console.assert(`Server listening on port ${PORT}...`);
    }
);

const io = socket(server);



