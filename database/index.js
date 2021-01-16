const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/photogallery', { useNewUrlParser: true, useUnifiedTopology: true });

// const db = mongoose.connection;

// // eslint-disable-next-line no-console
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', () => {
//   // eslint-disable-next-line no-console
//   console.log('Connected to MongoDB!');
// });

const gallerySchema = new mongoose.Schema({
  title: String,
  reviews: Number,
  rating: Number,
  isSuperhost: Boolean,
  location: {
    city: String,
    state: String,
    country: String,
  },
  gallery: [
    {
      id: Number,
      photoName: String,
      photoUrl: String,
      photoDescription: String,
    },
  ],
});

const Gallery = mongoose.model('Gallery', gallerySchema);

module.exports = {
  Gallery,
};
