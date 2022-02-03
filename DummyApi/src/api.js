'use strict'

import express from 'express';

const app = express();
const data = {
    id: 0
};
const SLEEP_TIME = 5000;

function sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  };

app.use((_req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
})

app.get('/', async (_req, res) => {
    await sleep(SLEEP_TIME);
    data.id++;
    // res.sendStatus(404);
    res.json(data);
});


app.listen(8080, () => {console.log("Listening to port 8080")});