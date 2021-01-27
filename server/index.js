const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const controllers = require('./controllers/galleryController.js');

const app = express();
const port = 3017;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/:id', express.static(path.join(__dirname, '../client/dist/bundle.js')));

app.get('/api/galleries', controllers.getGalleries);

app.get('/api/galleries/:id', controllers.getGalleryById);

app.listen(port, () => {
  console.log(`Photo Gallery app listening at http://localhost:${port}`);
});

module.exports = {
  app,
  port,
};
