const db = require('../../database/index.js');

const getGalleries = (cb) => {
  db.Gallery.find({}, (err, docs) => {
    if (err) {
      cb(err);
    } else {
      cb(err, docs);
    }
  });
};

const getGalleryById = (id, cb) => {
  db.Gallery.find({ _id: id }, (err, docs) => {
    if (err) {
      cb(err);
    } else {
      cb(err, docs);
    }
  });
};

module.exports = {
  getGalleries,
  getGalleryById,
};
