const express = require('express');
const cors = require('cors')

const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const db = require('../database/index.js');
const responseTime = require('response-time');

const redisClient = require('redis').createClient;

const redis = redisClient(6379, 'localhost');


app.use(express.static(path.join(__dirname, '../client/public')));
app.use(bodyParser.json());
app.use((req, res, next) => {
  console.log(req.url, req.method);
  next();
});
app.use(cors());
app.use(responseTime());

app.get('/api/photo/:id', (req, res) => {
  db.getById(redis, req.params.id, (results) => {
    res.json(results);
  });
});
app.listen(3003, () => console.log("I am listening to Dylan's Channel: localhost:3003"));
