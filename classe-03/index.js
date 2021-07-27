const express = require('express');

const app = express();

const players = ["José", "Maria", "João", "Marcos", "Fernanda"];
let turn = 0;
let round = 1;

app.get('/players', (req, res) => {
    console.log('Got it.');

    res.send(`Round ${round}: it's ${players[turn]} turn!`);

    turn++;
    if (turn >= players.length) { turn = 0; round++; };
})

app.listen(8000);