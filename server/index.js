const express = require('express');
// const db = require('../database/index.js');
const path = require('path');
const controllers = require('./controllers/galleryController.js');

const app = express();
const port = 3017;

app.use('/:id', express.static(path.join(__dirname, '../client/dist')));

app.get('/api/galleries', controllers.getGalleries);

// app.get(('/api/galleries'), (req, res) => {
//   db.Gallery.find({}, (err, docs) => {
//     if (err) {
//       res.sendStatus(400);
//     } else {
//       res.status(200).send(docs);
//     }
//   });
// });

app.get('/api/galleries/:id', controllers.getGalleryById);
// app.get(('/api/galleries/:id'), (req, res) => {
//   const { id } = req.params;

//   db.Gallery.find(({ _id: id }), (err, docs) => {
//     if (err) {
//       res.sendStatus(400);
//     } else {
//       res.status(200).send(docs);
//     }
//   });
// });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
