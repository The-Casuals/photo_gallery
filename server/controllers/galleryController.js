const models = require('../models/galleryModels.js');

const getGalleries = (req, res) => {
  models.getGalleries((err, docs) => {
    if (err) {
      res.sendStatus(400);
    } else {
      res.status(200).send(docs);
    }
  });
};

const getGalleryById = (req, res) => {
  const { id } = req.params;
  models.getGalleryById(id, (err, docs) => {
    if (err) {
      res.sendStatus(400);
    } else {
      res.status(200).send(docs);
    }
  });
};

module.exports = {
  getGalleries,
  getGalleryById,
};
