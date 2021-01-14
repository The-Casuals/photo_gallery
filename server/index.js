const express = require('express');
const { Gallery } = require('../database/index.js');
// const db = require('../database/index.js');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/api/galleries', (req,res) => {
  Gallery.find({}, (err, docs)=> {
    if (err) {
      res.sendStatus(400);
    } else {
      res.status(200).send(docs);
    }
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
